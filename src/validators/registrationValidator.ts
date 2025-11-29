import DbQuery from '../db/query';
import { body } from 'express-validator';

export const registrationValidator = [
  body('name')
    .trim()
    .notEmpty()
    .isAlpha()
    .withMessage('First name must contains only alphabet characters.'),
  body('surname')
    .trim()
    .notEmpty()
    .isAlpha()
    .withMessage('Surname must contains only alphabet characters.'),
  body('email')
    .trim()
    .isEmail()
    .custom(async (value) => {
      const user = await DbQuery.findUser(value);
      if (user) throw new Error('E-mail already in use.');
    }),

  body('password')
    .trim()
    .matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/),
  body('passwordConfirm')
    .trim()
    .custom((value, { req }) => {
      const result = value === req.body.password;
      if (!result) throw new Error('Passwords did not match.');
    }),
];
