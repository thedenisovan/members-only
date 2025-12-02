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
    getRandomColor,
  });
});

function getRandomColor(): string {
  const luckyNum = Math.floor(Math.random() * 6);

  switch (luckyNum) {
    case 0:
      return '#FEF08A;';
    case 1:
      return '#FBCFE8;';
    case 2:
      return '#BFDBFE;';
    case 3:
      return '#BBF7D0;';
    case 4:
      return '#E9D5FF;';
    default:
      return '#FED7AA;';
  }
}
