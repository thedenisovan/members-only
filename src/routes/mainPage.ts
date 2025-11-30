import { Router } from 'express';
import type { Request, Response } from 'express';

export const mainPage = Router();

mainPage.get('/', (req: Request, res: Response) => {
  res.status(200).render('mainPage', { user: req.user });
});
