const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const userModel = require('../src/models/userModel')
const bcrypt = require('bcrypt');
// passport.serializeUser(function(user, done) { //In serialize user you decide what to store in the session. Here I'm storing the user id only.
//     done(null, user.id);
//   });
  
//   passport.deserializeUser(function(id, done) { //Here you retrieve all the info of the user from the session storage using the user id stored in the session earlier using serialize user.
//     userModel.findOne(id, function(err, user) {
//       done(err, user);
//       });
//   });
passport.use(new LocalStrategy(
    {
        username: 'email',
        password: 'password'
    },
     async function(email,password,done){
        const user = await userModel.findOne({email});
        if(!user) return done(null,{msg:'Email or password incorrect'})
        const match = await bcrypt.compare(user.password,password);
        !match ? done(null,{msg:'Email or passport incorrect'}) : done(null,user)
    }   
))