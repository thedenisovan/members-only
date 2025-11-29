import { Router } from 'express';
import type { Request, Response } from 'express';
import passport from 'passport';

export const signin = Router();

signin.get('/', (req: Request, res: Response) =>
  res.status(200).render('signin')
);
signin.post(
  '/',
  passport.authenticate('local', {
    successRedirect: 'mainPage',
    failureRedirect: '/',
  })
);
