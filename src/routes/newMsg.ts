import { Router } from 'express';
import type { Request, Response } from 'express';
import DbQuery from '../db/query';
import { getColorByName, getRandomAngle } from '../public/utils';
export const newMsg = Router();

newMsg.get('/', async (req: Request, res: Response) => {
  const { rows } = await DbQuery.getAllComments();
  const user = req.user;

  res.status(200).render('newMsg', {
    user,
    rows,
    getColorByName,
    getRandomAngle,
  });
});

newMsg.post('/', async (req, res, next) => {
  const { title } = req.body;
  const { message } = req.body;
  const user = req.user;

  let id = 98; // Guest user id for default value

  if (user?.id !== undefined) id = user.id;

  DbQuery.createNewComment({ title, message, id });

  res.redirect('mainPage');
});
