import { pool } from './pool';
const bcrypt = require('bcryptjs');

export interface NeonUsers {
  name: string;
  surname: string;
  email: string;
  password: string;
  isMember: boolean | string;
  isAdmin: boolean | string;
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

    isAdmin === 'Odin' ? (isAdmin = true) : (isAdmin = false);
    isMember === 'On' ? (isMember = true) : (isMember = false);

    await pool.query(
      `INSERT INTO users (name, surname, email, pass, isAdmin, isMember)
       VALUES ($1, $2, $3, $4, $5, $6)
       ON CONFLICT (email) DO NOTHING;
      `,
      [name, surname, email, hashedPassword, isAdmin, isMember]
    );
  };
}
