const express = require('express');
require('dotenv').config();
import type { Request, Response, NextFunction } from 'express';

const app = express();
const SERVER = process.env.SERVER;

app.get('/', (req: Request, res: Response) => res.send('Hi son!'));

app.listen(SERVER, () => {
  console.log(`Listening on localhost:${SERVER}`);
});
