# LedgerX

A ledger-focused financial platform with a TypeScript API and React frontend.

## Monorepo structure

- `apps/api` — Express + TypeScript backend
- `apps/web` — React + TypeScript frontend
- `database` — schema, migrations, and seed scripts
- `docs` — architecture and API documentation

## Getting started

1. Copy `.env.example` to `.env` and adjust values.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the API:
   ```bash
   npm run dev:api
   ```
4. Start the web app:
   ```bash
   npm run dev:web
   ```

## Notes

This scaffold is intentionally minimal and ready to extend with domain modules for auth, wallets, transfers, reconciliation, and risk checks.
