import type { Request, Response, NextFunction } from 'express';
const express = require('express');
const path = require('node:path');
require('dotenv').config();

const app = express();
const SERVER = process.env.SERVER;
const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req: Request, res: Response) => res.render('index'));

app.listen(SERVER, () => {
  console.log(`Listening on localhost:${SERVER}`);
});
