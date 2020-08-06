import { Router } from 'express';
import database from './database/connection';

const router = Router();

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

function parseFieldTime(time: string) {
  const [hour, minutes] = time.split(':').map(Number);
  return (hour * 60) + minutes;
}

router.post('/leassons', async (request, response) => {
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
        from: parseFieldTime(from),
        to: parseFieldTime(to),
      };
    });

    await transaction('schedules').insert(formattedSchedule);

    await transaction.commit();

    return response.status(201).send();
  } catch (error) {
    await transaction.rollback();

    return response.status(400).json({ error: 'Unexpected error while register teacher' });
  }
});

export default router;
