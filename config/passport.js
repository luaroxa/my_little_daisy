const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const Customer = require('../models/customer.js');
console.log('google', process.env.GOOGLE_CLIENT_ID)

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK
},
function(accessToken, refreshToken, profile, cb) {
  console.log("google's info", profille)
  User.findOne({ 'googleId': profile.id }, function(err, user) {
    if (err) return cb(err);
    //user exist, so we return user to passport
    if (user) {
      return cb(null, student);
    } else {
      // we have a new student via OAuth!
      var newUser = new User({
        name: profile.displayName,
        email: profile.emails[0].value,
        googleId: profile.id
      });
      newUser.save(function(err) {
        if (err) return cb(err);
        return cb(null, newUser);
      });
    }
  });
}
));


//Boilder plates below

//converts (name:'Jane') --> into session ID
passport.serializeUser(function(user, done) {
    done(null, user.id);
});
//converts into session ID -->  (name:'Jane')
passport.deserializeUser(function(id, done) {
    user.findById(id, function(err, user) {
      done(err, user);
    });
  });
