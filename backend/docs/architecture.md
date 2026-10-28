# Architecture

LedgerX is modeled as a ledger-first financial platform with a modular backend and a React frontend. The API is organized by business domains: auth, users, wallets, transfers, ledger accounting, reconciliation, idempotency, and risk.

## Core principles

- Explicit accounting boundaries around ledger mutations
- Idempotent transfer processing
- Strong validation and auditability
- Modular domain-driven design
