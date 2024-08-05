import express from 'express';
import dotenv from 'dotenv';
import { connect } from './config/db.js';
import apiRoutes from './routes/apiRoutes.js';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const server = express();


const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);
dotenv.config({
    path: '.env'
});

// Middleware para parsear JSON y formularios URL-encoded
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Middleware para registro de solicitudes
server.use(morgan('dev'));

// Middleware para permitir CORS
server.use(cors());

// Conectar a la base de datos
connect();

// Usar las rutas API
server.use('/server', apiRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Puerto escuchando en ${PORT}`);
});
