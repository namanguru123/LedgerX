export const databaseConfig = {
  url: process.env.DATABASE_URL ?? 'postgresql://postgres:postgres@localhost:5432/ledgerx',
  pool: {
    min: 1,
    max: 10
  }
};
