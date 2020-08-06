import { Router } from 'express';
import LeassonsController from './controllers/LeassonsController';

const router = Router();
const leassonsController = new LeassonsController();

router.post('/leassons', leassonsController.create);

export default router;
