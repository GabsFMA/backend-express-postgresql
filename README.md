# Backend com Express + PostgreSQL

Este projeto é uma API RESTful desenvolvida com Node.js, Express e PostgreSQL. A arquitetura segue a separação por camadas (controller, service, routes) e conta com autenticação via JWT. O projeto também inclui scripts shell para testes de endpoints e está preparado para execução via Docker.

## 📁 Estrutura de Pastas

```
.
├── api
│   ├── controller
│   ├── database
│   ├── middleware
│   ├── models
│   ├── routes
│   └── service
│       └── index.js
├── node_modules
├── requests
│   ├── GET_*.sh
│   ├── POST_*.sh
├── .env
├── .env.example
├── .gitignore
├── docker-compose.yml
├── Dockerfile
├── package.json
├── package-lock.json
├── vercel.json
└── README.md
```

## ⚙️ Scripts (`package.json`)

```json
"scripts": {
  "dev": "nodemon api/index.js",
  "start": "docker compose up -d",
  "generate-secret-key": "node -e \"console.log(require('crypto').randomBytes(32).toString('hex'))\""
}
```

## 🚀 Tecnologias Utilizadas

- Node.js
- Express
- PostgreSQL (via `pg`)
- JWT (JsonWebToken)
- dotenv
- express-validator
- Docker

## 🔐 Autenticação

O projeto utiliza JWT para proteger rotas. Tokens válidos são necessários para acessar endpoints protegidos.

## 🧪 Testes de Endpoints

A pasta `requests/` contém scripts `.sh` com comandos `curl` para testar os endpoints da aplicação, organizados por tipo de resposta (válido, inválido, erro de autenticação, etc).

### Exemplo:

```bash
sh requests/POST_Login_User.sh
```

## 📦 Dependências Principais

```json
{
  "bcrypt": "^5.1.1",
  "dotenv": "^16.5.0",
  "express": "^5.1.0",
  "express-validator": "^7.2.1",
  "jsonwebtoken": "^9.0.2",
  "nodemon": "^3.1.0",
  "pg": "^8.15.6",
  "psql": "^0.0.1"
}
```

## 📺 Vídeo Demonstração

[https://youtu.be/yQvMGoaixnc]

---

## 📝 Observações

- O projeto **não usa ORM** (como Sequelize). A manipulação do banco PostgreSQL é feita diretamente via `pg`.
- Scripts auxiliares, como `generate-secret-key`, estão disponíveis para facilitar o desenvolvimento.
