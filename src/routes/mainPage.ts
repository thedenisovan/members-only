import { Router } from 'express';
import type { Request, Response } from 'express';
import DbQuery from '../db/query';
import { NeonComments } from '../db/query';

export const mainPage = Router();

mainPage.get('/', async (req: Request, res: Response) => {
  const { rows } = await DbQuery.getAllComments();
  let userName;

  if (req.user) userName = await DbQuery.getCommentAuthorName(req.user.id);

  console.log(userName);

  res.status(200).render('mainPage', { user: req.user, rows, userName });
});
