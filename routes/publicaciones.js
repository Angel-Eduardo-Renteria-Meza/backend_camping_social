import express from 'express';
import { agregarPublicacion, getPublications } from '../controllers/publicaciones.js';// Asegúrate de que la ruta sea correcta
import upload from '../config/multerConfig.js';
const publicacionRouter = express.Router();

publicacionRouter.post('/', upload.single('image') , agregarPublicacion);
publicacionRouter.get('/', getPublications )

export default publicacionRouter;