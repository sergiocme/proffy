import { Request, Response } from 'express';
import database from '../database/connection';

class ConnectionsController {
  async index(request: Request, response: Response) {
    const [result] = await database('connections').count('* as total_connections');

    return response.json(result);
  }

  async create(request: Request, response: Response) {
    const { user_id } = request.body;

    await database('connections').insert({
      user_id,
    });

    return response.status(201).send();
  }
}

export default ConnectionsController;
