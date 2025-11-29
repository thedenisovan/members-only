import { pool } from './pool';
import bcrypt from 'bcryptjs';
import type { QueryResultRow } from 'pg';

export interface NeonUsers {
  name: string;
  surname: string;
  email: string;
  password: string;
  isMember: string;
  isAdmin: string;
}

export default class DbQuery {
  static createNewUser = async ({
    name,
    surname,
    email,
    password,
    isAdmin,
    isMember,
  }: NeonUsers) => {
    const hashedPassword = await bcrypt.hash(password, 10);

    const adminFlag = isAdmin?.toLowerCase() === 'odin';
    const memberFlag = isMember?.toLowerCase() === 'on';

    await pool.query(
      `INSERT INTO users (name, surname, email, pass, isAdmin, isMember)
       VALUES ($1, $2, $3, $4, $5, $6)
       ON CONFLICT (email) DO NOTHING;
      `,
      [name, surname, email, hashedPassword, adminFlag, memberFlag]
    );
  };

  static findUser = async (email: string): Promise<QueryResultRow> => {
    const { rows } = await pool.query(`SELECT * FROM users WHERE email = $1`, [
      email,
    ]);
    return rows[0];
  };
}
