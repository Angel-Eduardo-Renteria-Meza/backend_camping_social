import express from 'express';
import userRouter from './user.js'; // Asegúrate de que la ruta sea correcta
import publicacionRouter from './publicaciones.js';
const apiRoutes = express.Router();

apiRoutes.use('/user', userRouter);
apiRoutes.use('/public', publicacionRouter);

export default apiRoutes;