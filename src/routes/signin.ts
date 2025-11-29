import '../controllers/authentication';
import { Router } from 'express';
import type { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import { signinValidator } from '../validators/loginValidator';
import { validationResult } from 'express-validator';

export const signin = Router();

signin.get('/', (req: Request, res: Response) => {
  console.log(req.session);
  res.status(200).render('signin', { errors: [] });
});

signin.post(
  '/',
  // Validates that email exists and pass is correct.
  signinValidator,
  (req: Request, res: Response, next: NextFunction) => {
    const result = validationResult(req);

    if (!result.isEmpty()) {
      return res.status(400).render('signin', { errors: result.array() });
    }
    next();
  },
  passport.authenticate('local', {
    successRedirect: '/mainPage',
    failureRedirect: '/',
    failureMessage: true,
  })
);
