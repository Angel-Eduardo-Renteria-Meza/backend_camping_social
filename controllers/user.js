import bcrypt from 'bcrypt';
import { UserModel } from '../models/user.js';
import { generateToken } from '../config/jwtConfig.js';

export const saveUsers = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Hash de la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new UserModel({
            username,
            email,
            password: hashedPassword,
        });

        const userSaved = await user.save();

        // Generar un token para el nuevo usuario
        // const token = generateToken(userSaved);

        res.status(201).json(userSaved);
    } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).json({ message: "Error contacte al administrador" });
    }
};

export const logIn = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await UserModel.findOne({ email });
        
        if (!user || !( bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: "Credenciales incorrectas" });
        }
        
        // Generar un token para el usuario autenticado
        const token = generateToken(user);

        res.status(200).json({ user, token });
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ message: "Error contacte al administrador" });
    }
};
