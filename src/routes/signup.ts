const { Router } = require('express');
import type { Request, Response } from 'express';
import registerUser, { validator } from '../controllers/registration';

export const signup = Router();

signup.get('/', (req: Request, res: Response) =>
  res.status(200).render('signup')
);
signup.post('/', validator, registerUser);
