import { Router } from 'express';

export const router = Router();

router.get('/v1', (_req, res) => {
  res.json({ message: 'LedgerX API routes ready.' });
});
