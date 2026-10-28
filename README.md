# LedgerX

LedgerX is a ledger-first financial platform scaffolded as a TypeScript monorepo. The project currently includes a modular Express API, a React frontend shell, database design artifacts, and a domain-oriented backend structure for future ledger, wallet, transfer, risk, and reconciliation features.

## Project status

This repository is in its early implementation stage. The foundational pieces are in place:

- Express API with basic health and root endpoints
- React + Vite frontend shell
- PostgreSQL-oriented schema for users, wallets, and ledger entries
- Domain module folders for auth, users, wallets, transfers, ledger, reconciliation, idempotency, and risk
- Architecture and API planning documents under `docs/`

## Monorepo structure

- `apps/api` — backend service built with Express, TypeScript, Zod, CORS, and Helmet
- `apps/web` — React frontend built with Vite
- `database/schema` — SQL schema definitions
- `database/migrations` and `database/seeds` — reserved for future DB changes and seed data
- `docs` — architecture, API contracts, and database design notes

## Tech stack

### Backend

- Node.js
- TypeScript
- Express
- Zod for validation
- dotenv for environment configuration

### Frontend

- React
- Vite
- TypeScript

### Database

- PostgreSQL (schema currently modeled for core account and ledger primitives)

## Current backend capabilities

The API is currently set up with a lightweight server and exposes:

- `GET /health` — returns service health info
- `GET /` — returns API metadata

The backend is organized by domain modules, including:

- `auth`
- `users`
- `wallets`
- `transfers`
- `ledger`
- `reconciliation`
- `risk`
- `idempotency`

These are scaffolded as modular entry points and are ready to be expanded with business logic.

## Current data model

The initial schema includes:

- `users`
- `wallets`
- `ledger_entries`

This is aligned with a ledger-style system where each wallet can accumulate movements and each entry records a direction and amount.

## Getting started

### 1. Install dependencies

From the project root:

```bash
npm install
```

### 2. Run the API

```bash
npm run dev:api
```

This starts the backend in watch mode from `apps/api`.

### 3. Run the frontend

```bash
npm run dev:web
```

This starts the React app from `apps/web`.

### 4. Build the project

```bash
npm run build
```

## Environment configuration

The project is prepared for environment-based configuration, and the backend currently uses `dotenv` for loading environment variables. Add a local `.env` file in the backend or project root as needed for secrets and configuration values.

## Development notes

This codebase is intentionally a foundation for a full financial system. The existing structure suggests the next stages will include:

- user authentication and authorization
- wallet balance tracking
- money movement workflows with validation
- ledger journal entries and posting rules
- idempotent transfer processing
- risk scoring and reconciliation checks

## Roadmap

Planned work includes:

1. Implement core domain services and validation logic
2. Connect the API to PostgreSQL with real persistence
3. Add transfer and ledger transaction workflows
4. Add idempotency enforcement for retries and repeated requests
5. Implement reconciliation and risk evaluation endpoints
6. Expand the frontend pages and dashboard features

## License

This project is currently in active development and does not yet define a production license.
