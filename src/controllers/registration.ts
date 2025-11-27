import type { Request, Response } from 'express';
import type { NeonUsers } from '../db/query';
import DbQuery from '../db/query';
import { body, validationResult } from 'express-validator';

export const validator = [
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

export default async function registerUser(req: Request, res: Response) {
  const { name, surname, email, password, isAdmin, isMember }: NeonUsers =
    req.body;

  const result = validationResult(req);

  if (result.isEmpty()) {
    DbQuery.createNewUser({
      name,
      surname,
      email,
      password,
      isAdmin,
      isMember,
    });
    return res.status(200).redirect('/');
  }

  console.log(result.array());
  return res.status(400).render('signup', {
    errors: result.array(),
  });
}
