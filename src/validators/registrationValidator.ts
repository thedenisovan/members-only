import DbQuery from '../db/query';
import { body } from 'express-validator';

export const registrationValidator = [
  body('name')
    .trim()
    .notEmpty()
    .isAlpha()
    .withMessage('First name must contain only alphabet characters.'),
  body('surname')
    .trim()
    .notEmpty()
    .isAlpha()
    .withMessage('Surname must contain only alphabet characters.'),
  body('email')
    .trim()
    .isEmail()
    .custom(async (value) => {
      const user = await DbQuery.findUser(value);
      if (user) throw new Error('E-mail already in use.');
    }),

  body('pass')
    .trim()
    .matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/)
    .withMessage('6+ chars with uppercase, number and symbol.'),
  body('passwordConfirm')
    .trim()
    .custom(async (value, { req }) => {
      const result = value === req.body.pass;
      if (!result) throw new Error('Passwords did not match.');
    }),
];
