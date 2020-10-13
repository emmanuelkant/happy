import multer from 'multer';
import path from 'path';

export default {
  storage: multer.diskStorage({
    destination: path.join(__dirname, '..', '..', 'uploads'),
    filename: (request, file, cb) => {
      const fielName = `${Date.now()}-${file.originalname}`;
      cb(null, fielName);
    },
  })
};