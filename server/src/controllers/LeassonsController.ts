import { Request, Response } from 'express';
import database from '../database/connection';

function parseTime(time: string) {
  const [hour, minutes] = time.split(':').map(Number);
  return (hour * 60) + minutes;
}

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

class LeassonsController {
  async index(request: Request, response: Response) {
    const { query } = request;

    if (!query.week_day || !query.subject || !query.time) {
      return response.status(400).json({
        error: 'Missing filters to search leassons',
      });
    }

    const week_day = Number(query.week_day);
    const subject = String(query.subject);
    const parsedTime = parseTime(String(query.time));

    const leassons = await database('leassons')
      .whereExists((that) => {
        that.select('schedules.*')
          .from('schedules')
          .whereRaw('`schedules`.`leasson_id` = `leassons`.`id`')
          .whereRaw('`schedules`.`week_day` = ??', [week_day])
          .whereRaw('`schedules`.`from` <= ??', [parsedTime])
          .whereRaw('`schedules`.`to` > ??', [parsedTime])
      })
      .where('leassons.subject', '=', subject)
      .join('users', 'leassons.user_id', '=', 'users.id')
      .select(['leassons.*', 'users.*']);

    return response.json(leassons);
  }

  async create(request: Request, response: Response) {
    const {
      name,
      bio,
      avatar,
      whatsapp,
      subject,
      cost,
      schedule,
    } = request.body;

    const transaction = await database.transaction();

    try {
      const [userId] = await transaction('users').insert({
        name,
        bio,
        avatar,
        whatsapp
      });

      const [leassonId] = await transaction('leassons').insert({
        user_id: userId,
        subject,
        cost,
      });

      const formattedSchedule = schedule.map(({ week_day, from, to }: ScheduleItem) => {
        return {
          leasson_id: leassonId,
          week_day,
          from: parseTime(from),
          to: parseTime(to),
        };
      });

      await transaction('schedules').insert(formattedSchedule);

      await transaction.commit();

      return response.status(201).send();
    } catch (error) {
      await transaction.rollback();

      return response.status(400).json({ error: 'Unexpected error while register teacher' });
    }
  }
}

export default LeassonsController;
