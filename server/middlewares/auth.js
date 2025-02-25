import jwt from 'jsonwebtoken';

const userAuth = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ success: false, message: "Não autenticado." });
        }

        const token = authHeader.split(" ")[1]; // Remove o "Bearer " e pega apenas o token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded.id) {
            return res.status(401).json({ success: false, message: "Não autorizado. Faça login novamente." });
        }

        req.user = { id: decoded.id }; // Armazena no req.user em vez de req.body
        next();
    } catch (error) {
        return res.status(401).json({ success: false, message: error.message });
    }
};

export default userAuth;
