import '../controllers/authentication';
import { Router } from 'express';
import type { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import { loginValidator } from '../validators/loginValidator';
import validatorMiddleware from '../controllers/signinValidMiddleware';

export const signin = Router();

signin.get('/', (req: Request, res: Response) => {
  res.status(200).render('signin', { errors: [] });
});

signin.post(
  '/',
  // Validates that email exists and pass is correct.
  loginValidator,
  validatorMiddleware,
  passport.authenticate('local', {
    successRedirect: '/mainPage',
    failureRedirect: '/',
    failureMessage: true,
  })
);
