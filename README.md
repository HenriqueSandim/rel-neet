# RelNeet 👨‍💻

A RelNeet consiste num desafio de criar uma aplicação Full Stack desenvolvida do 0 em 1 semana a partir da ideia de um Cliente ter seu CRUD junto de poder adicionar Contatos para si, que também devem ter seus CRUD's.

## Tópicos de conteúdo

- [Visão Geral](#visão-geral)
  - [Tecnologias utilizadas](#--tecnologias-utilizadas)
- [Front End](#front-end)
  - [Rodar a aplicação localmente](#rodar-aplicação-localmente)
    - [Instalação de dependências](#0-instalação-de-dependências)
    - [Executar aplicação](#01-executar-aplicação)
- [Back End](#back-end)
  - [Rodar o servidor localmente](#rodar-o-servidor-localmente)
    - [Instalação de dependências](#1-instalação-de-dependências)
    - [Criando variáveis de ambiente](#11-criando-variáveis-de-ambiente)
    - [Executar as migrações](#12-migrations)
    - [Executar servidor](#13-executar-servidor)
  - [Endpoints](#endpoints)

## Visão Geral

[Retornar aos tópicos de conteúdo - 🔙](#tópicos-de-conteúdo)

### - Tecnologias utilizadas

- Back End:

|                                                                               |                                                                               |
| ----------------------------------------------------                          | --------------------------------------------------------------------------    |
| [NodeJS](https://nodejs.org/en/docs/)                                         |   [TypeScript](https://www.typescriptlang.org/)                               |
| [PostgreSQL](https://www.postgresql.org)                                      |   [TypeORM](https://typeorm.io/)                                              |
| [Dotenv](https://www.npmjs.com/package/dotenv)                                |   [Express-async-errors](https://www.npmjs.com/package/express-async-errors)  |
| [Express](https://expressjs.com/)                                             |   [BcryptJS](https://www.npmjs.com/package/bcryptjs)                          |
| [Pg](https://www.npmjs.com/package/pg)                                        |   [JsonWebToken](https://www.npmjs.com/package/jsonwebtoken)                  |
| [Yup](https://www.npmjs.com/package/yup)                                      |



## **Front End**

## Rodar aplicação localmente

[Retornar aos tópicos de conteúdo - 🔙](#tópicos-de-conteúdo)

<h4 align="center"><strong>🚨 Importante 🚨</strong></h4>

Após clonar o repositório, no seu terminal entre na pasta /front.

### 0. Instalação de dependências

[Retornar aos tópicos de conteúdo - 🔙](#tópicos-de-conteúdo)

Para instalação utilize os seguintes comandos em seu terminal:

```bash
yarn
```

Ou 

```bash
npm install | npm i
```

### 0.1. Executar aplicação

[Retornar aos tópicos de conteúdo - 🔙](#tópicos-de-conteúdo)

Com tudo instalado, falta somente executar a aplicação bastando executar o comando:

```bash
yarn dev
```

Ou

```bash
npm run dev
```

---

## **Back End**

## Rodar o servidor localmente

### 1. Instalação de dependências

[Retornar aos tópicos de conteúdo - 🔙](#tópicos-de-conteúdo)

Para instalação utilize os seguintes comandos em seu terminal:

```bash
yarn
```

Ou

```bash
npm install | npm i
```

### 1.1. Criando variáveis de ambiente

[Retornar aos tópicos de conteúdo - 🔙](#tópicos-de-conteúdo)

Também é preciso configurar as váriaveis de ambiente, crie um arquivo **.env** com base no **.env.example**, o seguinte comando pode auxiliar:

```bash
cp .env.example .env
```

E então configure da acordo com as informações contidas.

### 1.2. Migrations

[Retornar aos tópicos de conteúdo - 🔙](#tópicos-de-conteúdo)

Com a variáveis configuradas, execute as migrations para a montagem das tabelas com o comando:

```bash
yarn typeorm migration:run -- -d src/data-source.ts
```

Ou

```bash
npm run typeorm migration:run -- -d src/data-source.ts
```

### 1.3. Executar servidor

[Retornar aos tópicos de conteúdo - 🔙](#tópicos-de-conteúdo)

Com tudo configurado, execute o comando abaixo para rodar o servidor:

```bash
yarn dev
```

Ou

```bash
npm run dev
```

---

## Endpoints

[Retornar aos tópicos de conteúdo - 🔙](#tópicos-de-conteúdo)

### Índice

- [Session](#1-session)
  - [Login de clientes](#11-login-de-clientes---login---post)
- [Clientes](#2-clientes)
  - [Criar cliente](#21-criar-cliente---client---post)
  - [Informações do cliente logado](#22-informações-do-cliente-logado---client---get)
  - [Atualização dos dados do cliente](#23-atualizar-dados-do-cliente---clientclient_id---patch)
  - [Deletar dados do cliente](#23-deletar-dados-do-cliente---clientclient_id---delete)
- [Contatos](#3-contatos)
  - [Adicionar contato a um cliente](#31-adicionar-contato---contact---post)
  - [Listar contatos do cliente logado](#32-listar-contatos---contact---get)
  - [Atualizar dados de um contato do cliente logado](#33-atualizar-dados-de-um-contato---contactcontact_id---patch)
  - [Deletar contato do cliente logado](#34-deletar-contato---contactcontact_id---delete)

---

As rotas autenticadas (🔐) necessitam da adição de um token no cabeçalho da requisição do tipo "Bearer token". Caso não seja fornecido, será enviado um erro como:

- ❌ Resposta (Unauthorized) - status: 401

```json
{
	"message": "Missing authorization token."
}
```

As rotas que necessitam de **id** ex: "client/client_id" devem receber o id no formato UUID.

A manipulação de dados através dos métodos **PATCH/DELETE** nas rotas dos **clientes ("/client")** somente pode ocorrer pelo dono daqueles dados. Caso tente atualizar/deletar dados de um cliente diferente do que está logado será enviado o erro:

- ❌ Resposta (Forbidden) - status: 403

```json00911345677
{
	"message": "User don't have permission to do that."
}
```

---

## 1. Session

[Retornar aos Endpoints - 🔙](#endpoints)

### Rotas

| Método | Rota   | Descrição                |
| ------ | ------ | ------------------------ |
| POST   | /login | Login de um cliente. |

### 1.1. Login de clientes - ("/login") - POST

[Retornar aos Endpoints - 🔙](#endpoints)

- Dados de envio:

```json
{
  "email": "cliente@mail.com",
  "password": "Senha123!"
}
```

- ✅ Resposta (OK) - status: 200

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbnJpcXVlMkBtYWlsLmNvbSIsImlhdCI6MTY4MDQ2Mzg0..."
}
```

- ❌ Resposta (Unauthorized) - status: 401 - no caso de email e/ou senha incorretos.

```json
{
  "message": "Wrong credentials"
}
```

## 2. Clientes

[Retornar aos Endpoints - 🔙](#endpoints)

- Informações da DataBase:

| Campo     | Tipo   | Descrição                                 |
| --------- | ------ | ----------------------------------------- |
| id        | string | Identificador único do cliente.           |
| fullName      | string | O nome do cliente.                        |
| email     | string | O e-mail do cliente.                      |
| password  | string | A senha de acesso do cliente.             |
| description | string | Descrição/infos adicionais do cliente (opicional). |
| phoneNumber       | string | O número de telefone do cliente.          |
| createdAt | date   | Data indicando quando a conta foi criada. |

### Rotas

| Método | Rota                    | Descrição                           |
| ------ | ----------------------- | ----------------------------------- |
| POST   | /client                 | Cadastro de um cliente.             |
| GET    | /cliente                | Retorna os dados do cliente logado. |
| PATCH  | /cliente/:client_id | Atualiza os dados de um cliente.    |
| DELETE | /cliente/:client_id | Deleta um cliente.                  |

### 2.1. Criar cliente - ("/client") - POST

[Retornar aos Endpoints - 🔙](#endpoints)

- Dados de envio:

```json
{
  "fullName": "cliente",
  "email": "cliente@mail.com",
  "password": "Senha123!",
  "phoneNumber": "5531879925374"
}
```

- ✅ Resposta (Created) - status: 201

```json
{
  "id": "196240cb-f907-411e-b4a6-8864c79837fa",
  "fullName": "cliente",
  "email": "cliente@gmail.com",
  "description": null,
  "phoneNumber": "5531879925374",
  "createdAt": "2023-03-24T18:12:31.922Z"
}
```

- ❌ Missing required fields (Not found) - status: 404

````json
{
	"message": [
		"fullName is a required field",
		"email is a required field",
		"password is a required field",
		"phoneNumber is a required field"
	]
}
````

### 2.2. Informações do cliente logado - ("/client") - GET

[Retornar aos Endpoints - 🔙](#endpoints)

🔐 Autenticada

- ✅ Resposta (OK) - status: 200

```json
{
  "id": "196240cb-f907-411e-b4a6-8864c79837fa",
  "fullName": "cliente",
  "email": "cliente@mail.com",
  "description": null,
  "phoneNumber": "5531879925374",
  "createdAt": "2023-03-24T18:12:31.922Z"
}
```

### 2.3. Atualizar dados do cliente - ("/client/:client_id") - PATCH

[Retornar aos Endpoints - 🔙](#endpoints)

🔐 Autenticada

| Campo editável | Tipo   | Descrição                                 |
| -------------- | ------ | ----------------------------------------- |
| fullName           | string | Atualiza o nome do cliente.               |
| email          | string | Atualiza o e-mail do cliente.             |
| password       | string | Atualiza a senha do cliente.              |
| phoneNumber            | string | atualiza o numero de telefone do cliente. |


- Dados de envio:

```json
{
  "fullName": "cliente atualizado",
  "email": "clientenovo@mail.com",
  "password": "Senha321!",
  "description": "nova descrição",
  "phoneNumber": "5531879925374"
}
```

- ✅ Resposta (OK) - status: 200

```json
{
  "id": "196240cb-f907-411e-b4a6-8864c79837fa",
  "fullName": "cliente atualizado",
  "email": "clientenovo@mail.com",
  "description": "nova descrição",
  "phoneNumber": "5531879925374",
  "createdAt": "2023-03-24T18:12:31.922Z"
}
```

### 2.3. Deletar dados do cliente - ("/client/:client_id") - DELETE

[Retornar aos Endpoints - 🔙](#endpoints)

🔐 Autenticada

- ✅ Resposta (No content) - status: 204 - **No content**

---

## 3. Contatos

[Retornar aos Endpoints - 🔙](#endpoints)

- Informações da DataBase:

| Campo     | Tipo   | Descrição                                 |
| --------- | ------ | ----------------------------------------- |
| id        | string | Identificador único do contato.           |
| fullName      | string | O nome do contato.                        |
| email     | string | O e-mail do contato.                      |
| phoneNumber       | string | O número de telefone do contato.          |
| description       | string | Descrição extra do contato.          |
| createdAt | date   | Data indicando quando a conta foi criada. |

### Rotas

| Método | Rota                     | Descrição                                          |
| ------ | ------------------------ | -------------------------------------------------- |
| POST   | /contact                 | Cadastro de um contato.                            |
| GET    | /contact                 | Listagem dos contatos do cliente logado.           |
| PATCH  | /contact/:contact_id | Atualiza os dados de um contato do cliente logado. |
| DELETE | /contact/:contact_id | Deleta um contato do cliente logado.               |

### 3.1. Adicionar contato - ("/contact") - POST

[Retornar aos Endpoints - 🔙](#endpoints)

🔐 Autenticada

- Dados de envio:

```json
{
  "fullName": "contato",
  "email": "contato@mail.com",
  "phoneNumber": "5531879925374"
}
```

- ✅ Resposta (Created) - status: 201

```json
{
  "id": "196240cb-f907-411e-b4a6-8864c79837fa",
  "fullName": "contato",
  "email": "contato@mail.com",
  "phoneNumber": "5531879925374",
  "createdAt": "2023-03-24T18:12:31.922Z"
}
```

- ❌ Missing required fields (Not found) - status: 404

````json
{
	"message": [
		"fullName is a required field",
		"email is a required field",
		"phoneNumber is a required field"
	]
}
````

### 3.2 Listar contatos - ("/contact") - GET

[Retornar aos Endpoints - 🔙](#endpoints)

🔐 Autenticada

- ✅ Resposta (OK) - status: 200

```json
[
  {
    "id": "196240cb-f907-411e-b4a6-8864c79837fa",
    "fullName": "contato",
    "email": "contato@mail.com",
    "phoneNumber": "5531879925374",
    "createdAt": "2023-03-24T18:12:31.922Z"
  },
  ...
]

```

### 3.3 Atualizar dados de um contato - ("/contact/contact_id") - PATCH

[Retornar aos Endpoints - 🔙](#endpoints)

🔐 Autenticada

| Campo editável | Tipo   | Descrição                                 |
| -------------- | ------ | ----------------------------------------- |
| fullName           | string | Atualiza o nome do contato.               |
| email          | string | Atualiza o e-mail do contato.             |
| phoneNumber            | string | atualiza o numero de telefone do contato. |

- Dados de envio:

```json
{
  "fullName": "contato Atualizado",
  "email": "contatoatualizado@mail.com",
  "phoneNumber": "5531998039324"
}
```

- ✅ Resposta (OK) - status: 200

```json
{
  "id": "196240cb-f907-411e-b4a6-8864c79837fa",
  "fullName": "contato Atualizado",
  "email": "contatoatualizado@mail.com",
  "phoneNumber": "5531998039324",
  "createdAt": "2023-03-24T18:12:31.922Z"
}
```

### 3.4 Deletar contato - ("/contact/contact_id") - DELETE

[Retornar aos Endpoints - 🔙](#endpoints)

🔐 Autenticada

- ✅ Resposta (No Content) - status: 204 - **No content**

---