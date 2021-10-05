const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/user.js');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) {
    // a user has logged in with OAuth...
  }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    user.findById(id, function(err, user) {
      done(err, user);
    });
  });


// function(accessToken, refreshToken, profile, cb) {
//     user.findOne({ 'googleId': profile.id }, function(err, user) {
//       if (err) return cb(err);
//       if (user) {
//         return cb(null, user);
//       } else {
//         // we have a new user via OAuth!
//         var newuser = new user({
//           name: profile.displayName,
//           email: profile.emails[0].value,
//           googleId: profile.id
//         });
//         newuser.save(function(err) {
//           if (err) return cb(err);
//           return cb(null, newuser);
//         });
//       }
//     });
//   }
// ));