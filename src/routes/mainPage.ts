const { Router } = require('express');
import type { Request, Response } from 'express';

export const mainPage = Router();

mainPage.get('/', (req: Request, res: Response) => res.render('mainPage'));
