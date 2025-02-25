import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import userRouter from './routes/userRouter.js'
import { rateLimit } from 'express-rate-limit';
import imageRouter from './routes/imageRouter.js'

const PORT = process.env.PORT || 4050


const app = express();

// Configura o middleware de rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 1000, // Limita cada IP a 100 requisições por janela
    standardHeaders: true, // Retorna informações de rate limit nos cabeçalhos RateLimit-*
    legacyHeaders: false, // Desativa os cabeçalhos X-RateLimit-*
    // pode configurar um store externo (Redis, Memcached, etc.) se necessário
});
// Aplica o middleware para todas as requisições
app.use(limiter);


app.use(express.json())
app.use(cors())
await connectDB();

app.get("/", async (req, res, next) => {
    try {
        let html = fs.readFileSync(path.resolve(root, "index.html"), "utf-8");

        // Transforma o HTML com os plugins do Vite
        html = await viteServer.transformIndexHtml(req.url, html);

        res.send(html);
    } catch (e) {
        return next(e);
    }
});

//API usuário
app.use('/api/user', userRouter);
app.use('/api/image',imageRouter);

app.get('/', (req, res) => res.send("API working"))

app.listen(PORT, () => console.log('Servidor rodando na porta ' + PORT));
