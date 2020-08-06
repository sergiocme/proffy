import { Router } from 'express';
import LeassonsController from './controllers/LeassonsController';

const router = Router();
const leassonsController = new LeassonsController();

router.get('/leassons', leassonsController.index);
router.post('/leassons', leassonsController.create);

export default router;
