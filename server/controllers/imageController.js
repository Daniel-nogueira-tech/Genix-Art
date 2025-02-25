import axios from "axios";
import userModel from "../models/userModel.js";
import FormData from 'form-data';

export const generateImage = async (req, res) => {
    try {
        const { userId, prompt } = req.body;

        // Verifica se os dados necessários foram fornecidos
        if (!userId || !prompt) {
            return res.status(400).json({ success: false, message: 'Detalhes faltantes' });
        }

        // Busca o usuário no banco de dados
        const user = await userModel.findById(userId);
        if (!user) {
            return res.status(404).json({ success: false, message: 'Usuário não encontrado' });
        }

        // Verifica se o usuário possui saldo suficiente
        if (user.creditBalance <= 0) {
            return res.status(400).json({ success: false, message: 'Nenhum saldo disponível', creditBalance: user.creditBalance });
            
            
          }
          

        // Prepara o FormData com o prompt
        const formData = new FormData();
        formData.append('prompt', prompt);

        // Chamada à API para gerar a imagem
        const { data } = await axios.post(
            'https://clipdrop-api.co/text-to-image/v1',
            formData,
            {
                responseType: 'arraybuffer', // Garante que a resposta seja em formato binário
                headers: {
                    'x-api-key': process.env.CLIPDROP_API,
                    ...formData.getHeaders() // Inclui os headers adequados para o FormData
                },
            }
        );

        // Verifica se os dados foram recebidos corretamente
        if (!data) {
            return res.status(500).json({ success: false, message: "Falha ao obter a imagem da API." });
        }

        // Converte os dados binários em uma string Base64
        const base64Image = Buffer.from(data, 'binary').toString('base64');
        const resulImage = `data:image/png;base64,${base64Image}`;

        // Atualiza o saldo do usuário decrementando 1 crédito
        const updatedUser = await userModel.findByIdAndUpdate(
            user._id,
            { $inc: { creditBalance: -1 } },
            { new: true }
        );

        // Retorna a imagem gerada e o novo saldo do usuário
        res.status(200).json({
            success: true,
            message: "Imagem gerada com sucesso",
            creditBalance: updatedUser.creditBalance,
            resulImage
        });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ success: false, message: error.message });
    }
}
