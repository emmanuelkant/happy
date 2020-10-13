import Router from 'express';
import OrphanageController from './controllers/orphanages';

const routes = Router();

routes.get('/orphanages', OrphanageController.index);
routes.get('/orphanage/:id', OrphanageController.show);
routes.post('/orphanages', OrphanageController.create);

export default routes