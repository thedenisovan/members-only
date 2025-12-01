import { Router } from 'express';
import type { Request, Response } from 'express';
import DbQuery from '../db/query';

export const mainPage = Router();

mainPage.get('/', async (req: Request, res: Response) => {
  const { rows } = await DbQuery.getAllComments();
  const user = req.user;

  res.status(200).render('mainPage', {
    user,
    rows,
  });
});
