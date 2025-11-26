const { Router } = require('express');
import type { Request, Response } from 'express';

export const signin = Router();

signin.get('/', (req: Request, res: Response) => res.render('index'));
