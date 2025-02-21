import express from 'express'
import cors from 'cors'
import 'dotenv/config'

const PORT = process.env.PORT || 4050
const app = express()

app.use(express.json())
app.use(cors())  // Corrigido

app.get('/', (req, res) => res.send("API working"))

app.listen(PORT, () => console.log('Servidor rodando na porta ' + PORT));
/*3:46:30*/