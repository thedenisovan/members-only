import express from 'express';
import session from 'express-session';
import passport from 'passport';
import path from 'path';
import dotenv from 'dotenv';

import './controllers/authentication';
import { signin } from './routes/signin';
import { signup } from './routes/signup';
import { mainPage } from './routes/mainPage';

dotenv.config();

const app = express();
const SERVER = process.env.SERVER;

// Paths
const assetsPath = path.join(__dirname, 'public');
const viewsPath = path.join(__dirname, 'views');

// Middleware
app.use(express.static(assetsPath));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: 'cats',
    resave: false,
    saveUninitialized: false,
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
app.listen(SERVER, () => {
  console.log(`Server listening on http://localhost:${SERVER}`);
});
