// config/multerConfig.js
import path from "path"
import multer from "multer"
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Definir __dirname

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads/'));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

export default upload;
