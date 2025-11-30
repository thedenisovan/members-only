import express from 'express';
import session from 'express-session';
import passport from 'passport';
import path from 'path';
import dotenv from 'dotenv';
import { pool } from './db/pool';

import './controllers/authentication';
import { signin } from './routes/signin';
import { signup } from './routes/signup';
import { mainPage } from './routes/mainPage';

const pgSession = require('connect-pg-simple')(session);
dotenv.config();

// Interface extension so i can add views count to session metadata
declare module 'express-session' {
  interface SessionData {
    views: number;
  }
}

const app = express();
const SECRET = process.env.NOT_FOR_YOU as string;

// Paths
const assetsPath = path.join(__dirname, 'public');
const viewsPath = path.join(__dirname, 'views');

// Middleware
app.use(express.static(assetsPath));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 2, // Erases session cookies after 2 days of inactivity
    },
    store: new pgSession({
      pool,
      tableName: 'session',
    }),
  })
);
app.use(passport.initialize());
app.use(passport.session());

// View engine
app.set('views', viewsPath);
app.set('view engine', 'ejs');

// Routes
app.use('/', signin);
app.use('/signup', signup);
app.use('/mainPage', mainPage);

app.get('/log-out', (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    res.redirect('/');
  });
});

// Start server
app.listen(process.env.SERVER, () => {
  console.log(`Server listening on http://localhost:${process.env.SERVER}`);
});
