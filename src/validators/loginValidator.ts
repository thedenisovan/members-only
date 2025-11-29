import DbQuery from '../db/query';
import { body } from 'express-validator';
import bcrypt from 'bcryptjs';

export const signinValidator = [
  body('username').custom(async (value, { req }) => {
    const user = await DbQuery.findUser(value);
    if (!user) throw new Error('No user with given email exists.');

    // Storing user in request to use in password validation
    req.user = user;
  }),
  body('password').custom(async (value, { req }) => {
    const user = req.user;
    if (!user) return; // If username failed, skip password check

    if (user) {
      const passMatch = await bcrypt.compare(value, user.pass);

      if (!passMatch) throw new Error('Incorrect password.');
    }
  }),
];
