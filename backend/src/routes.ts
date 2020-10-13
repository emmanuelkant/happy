import Router from 'express';
import uploadConfig from './config/upload';
import OrphanagesController from './controllers/orphanages-controller';
import multer from 'multer';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanage/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

export default routes