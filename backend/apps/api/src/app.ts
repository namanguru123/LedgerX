import express, { type Request, type Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';

export const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    service: 'ledgerx-api',
    timestamp: new Date().toISOString()
  });
});

app.get('/', (_req: Request, res: Response) => {
  res.json({
    name: 'LedgerX API',
    version: '0.1.0',
    message: 'API scaffold ready for ledger operations.'
  });
});
