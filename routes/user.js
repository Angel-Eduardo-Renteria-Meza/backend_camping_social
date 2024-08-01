import express from 'express';
import { logIn, saveUsers } from '../controllers/user.js'; // Asegúrate de que la ruta sea correcta

const userRouter = express.Router();

userRouter.post('/', saveUsers);
userRouter.post('/login', logIn);

export default userRouter;