# 🎨 Projeto de Geração de Imagens com ClipDrop API

Este projeto é um **backend em Node.js** responsável por gerar imagens utilizando a **API da ClipDrop**, fornecendo uma base robusta para aplicações web que desejam criar imagens a partir de prompts de texto.

Além da integração com a ClipDrop, o servidor já está preparado para **autenticação**, **controle de acesso**, **rate limit**, **pagamentos** e **persistência de dados**, permitindo escalar o projeto para um modelo SaaS ou aplicação comercial.

---

## 🧠 Visão Geral

A ideia central é simples, mas poderosa:

* O usuário envia um **prompt de texto**
* O backend encaminha esse prompt para a **API da ClipDrop**
* A imagem gerada é retornada para o frontend

Tudo isso com camadas extras de segurança, autenticação e controle de uso.

---

## 🛠️ Tecnologias Utilizadas

* **Node.js** (ES Modules)
* **Express** – servidor HTTP
* **Axios** – requisições HTTP
* **ClipDrop API** – geração de imagens por IA
* **MongoDB + Mongoose** – banco de dados
* **JWT (jsonwebtoken)** – autenticação
* **Bcrypt** – hash de senhas
* **Express Rate Limit** – proteção contra abuso
* **Cors** – controle de acesso
* **Dotenv** – variáveis de ambiente
* **Razorpay** – integração com pagamentos
* **Nodemon** – desenvolvimento

---

## 📦 Dependências

As principais dependências do projeto:

* axios
* bcrypt
* cors
* dotenv
* express
* express-rate-limit
* form-data
* jsonwebtoken
* mongoose
* razorpay

---

## 📂 Estrutura do Projeto (sugestão)

```
server/
├── server.js
├── routes/
│   ├── auth.routes.js
│   ├── image.routes.js
│   └── payment.routes.js
├── controllers/
│   ├── auth.controller.js
│   ├── image.controller.js
│   └── payment.controller.js
├── models/
│   └── User.js
├── middlewares/
│   ├── auth.middleware.js
│   └── rateLimit.middleware.js
├── services/
│   └── clipdrop.service.js
├── .env
└── package.json
```

---

## 🔐 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```
PORT=3000
MONGO_URI=sua_string_de_conexao
JWT_SECRET=sua_chave_secreta
CLIPDROP_API_KEY=sua_api_key_da_clipdrop
RAZORPAY_KEY_ID=sua_key
RAZORPAY_KEY_SECRET=sua_secret
```

---

## ▶️ Como Executar o Projeto

1. Instale as dependências:

```
npm install
```

2. Inicie o servidor em modo desenvolvimento:

```
npm run server
```

O servidor estará disponível em:

```
http://localhost:3000
```

---

## 🖼️ Geração de Imagens (Fluxo)

1. Usuário autenticado envia um **prompt**
2. O backend valida o token JWT
3. O prompt é enviado à **ClipDrop API**
4. A imagem gerada retorna em formato binário ou base64
5. O frontend exibe ou salva a imagem

Esse fluxo pode ser facilmente adaptado para:

* Sistema de créditos
* Limite diário de imagens
* Planos pagos

---

## 💳 Pagamentos

O projeto já inclui integração com **Razorpay**, permitindo:

* Criação de planos
* Compra de créditos
* Liberação de funcionalidades premium

Ideal para transformar o sistema em um **serviço comercial**.

---

## 🚀 Possíveis Evoluções

* Histórico de imagens geradas
* Sistema de créditos por usuário
* Cache de imagens
* Webhook de pagamento
* Painel administrativo
* Suporte a múltiplos modelos de IA

---

## 📜 Licença

Este projeto está sob a licença **ISC**.

---

## 🧩 Observação Final

Este backend foi pensado como uma **base sólida**, não apenas um script simples. Ele já nasce preparado para crescer, receber usuários reais, lidar com escala e com o lado menos glamouroso — mas essencial — da engenharia de software.

A IA cria imagens. O backend cria limites, regras e possibilidades.
