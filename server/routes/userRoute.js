import express from 'express';
import register from '../controllers/user/register.js';
import sendTelegram from '../controllers/user/sendTelegram.js';
import uploadAvatar from '../controllers/user/uploadAvatar.js';
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

router.route('/upload-avatar').post(multer({ storage: storageConfig }).single('filedata'), uploadAvatar);
router.route('/register').post(register);
router.route('/send-telegram').post(sendTelegram);

export default router;
