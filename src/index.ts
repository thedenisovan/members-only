import { signin } from './routes/signin';
import { signup } from './routes/signup';
import { mainPage } from './routes/mainPage';
const session = require('express-session');
const passport = require('passport');
const express = require('express');
const path = require('node:path');
require('dotenv').config();

const app = express();
const SERVER = process.env.SERVER;

const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));
app.use(session({ secret: 'cats', resave: false, saveUninitialized: false }));
app.use(passport.session());
app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', signin);
app.use('/signup', signup);
app.use('/mainPage', mainPage);

app.listen(SERVER, '0.0.0.0', () => {
  console.log(`Listening on localhost:${SERVER}`);
});
