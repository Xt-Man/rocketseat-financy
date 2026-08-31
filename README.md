# Rocketseat - Financy

## Desafio Prático: Financy

Vamos desenvolver uma aplicação FullStack de gerenciamento de finanças: o Financy!
O objetivo é criar uma aplicação que permita a organização de finanças, com gestão de transações e categorias.

**Descrição e requisitos funcionais do Back-end**

Nesse projeto back-end, será desenvolvido uma API para gerenciar a organização das finanças.

Funcionalidades e Regras

- O usuário pode criar uma conta e fazer login
- O usuário pode ver e gerenciar apenas as transações e categorias criadas por ele
- Deve ser possível criar uma transação
- Deve ser possível deletar uma transação
- Deve ser possível editar uma transação
- Deve ser possível listar todas as transações
- Deve ser possível criar uma categoria
- Deve ser possível deletar uma categoria
- Deve ser possível editar uma categoria
- Deve ser possível listar todas as categorias

**Requisitos Não Funcionais**

É obrigatório o uso de:

- TypeScript
- GraphQL
- Prisma
- SQLite (PostgreSQL opcionalmente)

**Boas Práticas**

Não se esqueça de habilitar o CORS na aplicação.

**Quer ir além?**

Lembre-se de seguir todos os requisitos obrigatórios, principalmente os relacionados às tecnologias, como o ``GraphQL``. Mas você aprendeu bastante conteúdo ao longo da sua jornada da Pós-Graduação e, se quiser se desafiar, pode aplicar os conceitos de boas práticas e DevOps que estudou. Apenas lembre-se de configurar todo o ambiente para que a aplicação possa ser executada localmente.

**Como rodar**

1. Banco de dados (PostgreSQL, requer Docker)

```bash
docker compose up -d postgres
```

2. Configurações

- Crie `backend\.env` baseando-se em `backend\.env.example`
- Crie `frontend\.env` baseando-se no arquivo `frontend\.env.example`

3. Executar

```bash
npm run install
```
O TurboRepo executará o `npm run install` tanto do backend quanto do frontend

```bash
npm run dev
```
O TurboRepo executará o `npm run dev` tanto do backend quanto do frontend

4. Executar via Docker

```bash
docker compose up --build -d
```

**Serviços disponíveis:**

- Frontend: http://localhost:5173
- Backend GraphQL: http://localhost:4000/graphql
- PostgreSQL: ``localhost:5432`` (Usuário: financy, Senha: financy, Database: financy)

**Comandos Úteis**

Ver logs dos containers: ``docker compose logs -f``

Parar os containers: ``docker compose down``