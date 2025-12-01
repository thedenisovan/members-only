import bcrypt from 'bcryptjs';
import passport from 'passport';
import LocalStrategy from 'passport-local';
import DbQuery from '../db/query';

passport.use(
  new LocalStrategy.Strategy(
    async (username: string, password: string, done) => {
      try {
        const user = await DbQuery.findUser(username); // Finds user with given email in db
        if (!user) {
          return done(null, false);
        }
        const deserializedPassword = await bcrypt.compare(password, user.pass);

        if (!deserializedPassword) {
          return done(null, false);
        }

        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.email);
});

passport.deserializeUser(async (username: string, done) => {
  try {
    const user = await DbQuery.findUser(username);

    done(null, user);
  } catch (err) {
    done(err);
  }
});
