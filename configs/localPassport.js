const passport = require('passport');
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

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

var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';
opts.issuer = 'accounts.examplesoft.com';
opts.audience = 'yoursite.net';
passport.use(new LocalStrategy(
    {
        username: 'email',
        password: 'password'
    }, 
     async function(email,password,done){
        const user = await userModel.findOne({email});
        if(!user) return done(null,{msg:'Email or password incorrect'})
        const match = await bcrypt.compareSync(password,user.password);
        console.log(match,user)
        !match ? done(null,{msg:'Email or passport incorrect'}) : done(null,{user:{email,name:user.penName,image:user.imgUrl}})
    }   
))



require('dotenv').config()
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.LOCAL_REGISTER_SECRET;
opts.issuer = 'muradaliyev2229@gmail.com';
opts.audience = 'poemezery.net';
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.sub}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));