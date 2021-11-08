const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const userModel = require('../src/models/userModel')
require('dotenv').config();

passport.use(
  new GoogleStrategy(
    {
      // options for strategy
      callbackURL: 'http://localhost:8080/api/v1/auth/google/callback/',
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET
    },
    async (accessToken, refreshToken, profile, done) => {
      const email = profile.emails[0].value;
      const fullName = `${profile.name.givenName} ${profile.name.familyName}`;
      const imgUrl = profile.photos[0].value.substring(0, profile.photos[0].value.indexOf('?'));
      const currentUser = await userModel.findOne({ email });
      if (currentUser) {
        return done(null, currentUser);
      }
      else {
        const newUser = new userModel({ email, penName: fullName, imgUrl });
        const saveUser = await newUser.save();
        return done(null, saveUser)
      }
    }
  )
);