import { Router } from 'express';
import type { Request, Response } from 'express';

export const mainPage = Router();

mainPage.get('/', (req: Request, res: Response) => {
  // Count times each user has visited main page in given session
  !req.session.views ? (req.session.views = 1) : req.session.views++;

  res
    .status(200)
    .render('mainPage', { user: req.user, views: req.session.views });
});
