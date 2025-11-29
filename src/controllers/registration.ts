import type { Request, Response } from 'express';
import type { NeonUsers } from '../db/query';
import DbQuery from '../db/query';
import { validationResult } from 'express-validator';

export default async function registerUser(req: Request, res: Response) {
  const { name, surname, email, pass, isAdmin, isMember }: NeonUsers = req.body;

  const result = validationResult(req);

  try {
    if (result.isEmpty()) {
      DbQuery.createNewUser({
        name,
        surname,
        email,
        pass,
        isAdmin,
        isMember,
      });
      return res.status(200).redirect('/');
    }
    return res.status(400).render('signup', {
      errors: result.array(),
    });
  } catch (err) {
    res.status(400).render('/'); //TODO: replace with 404 page
  }
}
