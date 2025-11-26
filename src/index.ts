import type { Request, Response, NextFunction } from 'express';
import { signin } from './routes/signin';
import { signup } from './routes/signup';
const express = require('express');
const path = require('node:path');
require('dotenv').config();

const app = express();
const SERVER = process.env.SERVER;

const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));
// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', signin);
app.use('/signup', signup);

app.listen(SERVER, '0.0.0.0', () => {
  console.log(`Listening on localhost:${SERVER}`);
});
