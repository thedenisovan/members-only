import { pool } from './pool';
import bcrypt from 'bcryptjs';

export interface NeonComments {
  title: string;
  message: string;
  creation_time: string;
  creator_id: number;
}

export default class DbQuery {
  static createNewUser = async ({
    name,
    surname,
    email,
    pass,
    isAdmin,
    isMember,
  }: Express.User) => {
    const hashedPassword = await bcrypt.hash(pass, 10);

    const adminFlag = isAdmin?.toLowerCase() === 'odin';
    const memberFlag = isMember?.toLowerCase() === 'on';

    try {
      await pool.query(
        `
        INSERT INTO users (name, surname, email, pass, isAdmin, isMember)
        VALUES ($1, $2, $3, $4, $5, $6)
        ON CONFLICT (email) DO NOTHING;
      `,
        [name, surname, email, hashedPassword, adminFlag, memberFlag]
      );
    } catch (err) {
      throw new Error(`Error while inserting query in to database ${err}`);
    }
  };

  static createNewComment = async ({
    title,
    message,
    creator_id,
  }: NeonComments) => {
    try {
      await pool.query(
        `
        INSERT INTO comments (title, message, creation_time, creator_id)
        VALUES ($1, $2, CURRENT_DATE, $3)  
      `,
        [title, message, creator_id]
      );
    } catch (err) {
      throw new Error(`Error while inserting message in to database ${err}`);
    }
  };

  static findUser = async (email: string): Promise<Express.User | null> => {
    try {
      const { rows } = await pool.query(
        `SELECT * FROM users WHERE email = $1`,
        [email]
      );
      return rows[0];
    } catch {
      return null;
    }
  };

  static getAllComments = async () => {
    try {
      const { rows } = await pool.query(
        `
          SELECT name, surname, message, title FROM comments
          INNER JOIN users
          ON comments.creator_id = users.id;
        `
      );

      return { rows };
    } catch (err) {
      throw new Error(
        `Error while retrieving messages from the database ${err}`
      );
    }
  };
}
