import type { Request, Response } from 'express';
import type { NeonUsers } from '../db/query';
import DbQuery from '../db/query';

export default async function registerUser(req: Request, res: Response) {
  const { name, surname, email, password, isAdmin, isMember }: NeonUsers =
    req.body;

  DbQuery.createNewUser({ name, surname, email, password, isAdmin, isMember });
  res.redirect('/');
}
