const { Router } = require('express');
import type { Request, Response } from 'express';
import registerUser from '../controllers/registration';

export const signup = Router();

signup.get('/', (req: Request, res: Response) => res.render('signup'));
signup.post('/', registerUser);
