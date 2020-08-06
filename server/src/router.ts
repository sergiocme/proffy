import { Router } from 'express';
import LeassonsController from './controllers/LeassonsController';
import ConnectionsController from './controllers/ConnectionsControllers';

const router = Router();
const leassonsController = new LeassonsController();
const connectionsController = new ConnectionsController();

router.get('/leassons', leassonsController.index);
router.post('/leassons', leassonsController.create);

router.post('/connections', connectionsController.create);

export default router;
