import { Router } from 'express';
import type { Request, Response } from 'express';
import DbQuery from '../db/query';
import { getColorByName, getRandomAngle } from '../public/utils';
export const mainPage = Router();

mainPage.get('/', async (req: Request, res: Response) => {
  const { rows } = await DbQuery.getAllComments();
  const user = req.user;

  res.status(200).render('mainPage', {
    user,
    rows,
    getColorByName,
    getRandomAngle,
  });
});

mainPage.post('/', async (req, res, next) => {
  const { id } = req.body;
  const { pass } = req.body;

  await DbQuery.deleteComment(id, pass);
  res.redirect('mainPage');
  next();
});
