import express from 'express';
import userRouter from './user.js'; // Asegúrate de que la ruta sea correcta

const apiRoutes = express.Router();

apiRoutes.use('/user', userRouter);

export default apiRoutes;