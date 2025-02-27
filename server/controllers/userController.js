import UserModel from "../models/userModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userModel from "../models/userModel.js";

// Função de registro
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: 'Detalhes faltantes' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const userData = { name, email, password: hashedPassword };
        const newUser = new UserModel(userData);
        const user = await newUser.save();

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET); // Sem expiração

        res.status(201).json({ success: true, token, user: { name: user.name } });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Erro interno do servidor' });
    }
};

// Função para fazer login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ success: false, message: 'Preencha todos os campos' });
        }

        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(401).json({ success: false, message: 'Credenciais inválidas' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: 'Credenciais inválidas' });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET); // Sem expiração

        return res.status(200).json({ success: true, token, user: { name: user.name } });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Erro interno do servidor' });
    }
};

// Função para calcular crédito
const userCredits = async (req, res) => {
    try {
        const userId = req.user ? req.user.id : req.query.userId;

        if (!userId) {
            return res.status(400).json({ success: false, message: "User ID is required" });
        }

        const user = await userModel.findById(userId);

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        res.status(200).json({
            success: true,
            credit: user.creditBalance,
            user: {
                _id: user._id,
                name: user.name
            }
        });
    } catch (error) {
        console.error("Erro no servidor:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};



export { registerUser, loginUser, userCredits };
