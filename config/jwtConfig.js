// config/jwtConfig.js
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config({
    path: '.env'
});

const secretKey = process.env.JWT_SECRET  // Asegúrate de definir JWT_SECRET en tu archivo .env

export const generateToken = (user) => {
    console.log(secretKey);
    return jwt.sign(
        { id: user._id, email: user.email },
        secretKey,
        { expiresIn: '1h' } // El token expirará en 1 hora
    );
};

export const verifyToken = (token) => {
    return jwt.verify(token, secretKey);
};
