import express from 'express';
import uploadImage from '../controllers/post/uploadImage.js';
import multer from 'multer';

const router = express.Router();

const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

router.route('/upload-image').post(multer({ storage: storageConfig }).single('filedata'), uploadImage);

export default router;
