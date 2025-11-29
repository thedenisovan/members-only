import { Router } from 'express';
import type { Request, Response } from 'express';
import registerUser from '../controllers/registration';
import { registrationValidator } from '../validators/registrationValidator';

export const signup = Router();

signup.get('/', (req: Request, res: Response) =>
  res.status(200).render('signup', { errors: [] })
);
signup.post('/', registrationValidator, registerUser);
