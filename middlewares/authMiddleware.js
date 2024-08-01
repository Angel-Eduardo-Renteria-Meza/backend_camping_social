// middleware/authMiddleware.js
import { verifyToken } from '../config/jwtConfig.js';

export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Obtener el token del encabezado

    if (token == null) return res.sendStatus(401); // Si no hay token, devolver un 401

    try {
        const user = verifyToken(token);
        req.user = user; // Agregar el usuario al objeto request
        next(); // Pasar al siguiente middleware o ruta
    } catch (error) {
        res.sendStatus(403); // Token no válido
    }
};
