import bcrypt from 'bcryptjs';
import passport from 'passport';
import LocalStrategy from 'passport-local';
import DbQuery from '../db/query';
import { NeonUsers } from '../db/query';

passport.use(
  new LocalStrategy.Strategy(
    async (username: string, password: string, done: any) => {
      try {
        const { rows } = await DbQuery.findUser(username); // Finds user with given email in db
        const user = rows[0];
        console.log(user + ': 0');
        if (!user) {
          console.log('no user: 1');
          return done(null, false, {
            message: 'Could not find user with given email.',
          });
        }

        const deserializedPassword = await bcrypt.compare(
          password,
          user[0].pass
        );

        if (!deserializedPassword) {
          console.log('wrong pass: 2');
          return done(null, false, { message: 'Incorrect password.' });
        }

        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);

// passport.serializeUser((user: NeonUsers, done: any) => {
//   done(null, user.email);
// });

// passport.deserializeUser(async (username: string, done: any) => {
//   try {
//     const { rows } = await DbQuery.findUser(username);
//     const user = rows[0];

//     done(null, user);
//   } catch (err) {
//     done(err);
//   }
// });
