const passport = require('passport');
const FacebookStrategy = require('passport-facebook');
const userModel = require('../src/models/userModel')
require('dotenv').config();

passport.use(
  new FacebookStrategy(
    {
      // options for strategy
      callbackURL: 'http://localhost:8080/api/v1/auth/facebook/callback/',
      clientID: process.env.FB_CLIENT_ID,
      clientSecret: process.env.FB_CLIENT_SECRET
    },
    async (accessToken, refreshToken, profile, cb) => {
      const email = profile.emails[0].value;
      const fullName = `${profile.name.givenName} ${profile.name.familyName}`;
      const imgUrl = profile.photos[0].value.substring(0, profile.photos[0].value.indexOf('?'));
      const currentUser = await userModel.findOne({ email });
      if (currentUser) {
        return cb(null, currentUser);
      }
      else {
        const newUser = new userModel({ email, penName: fullName, imgUrl });
        const saveUser = await newUser.save();
        return cb(null, saveUser)
      }
    }
  )
);