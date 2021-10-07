const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const Customer = require("../models/customer.js");
console.log("google", process.env.GOOGLE_CLIENT_ID);

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK,
    },
    function (accessToken, refreshToken, profile, cb) {
      console.log("google's info", profile);
      Customer.findOne({ googleId: profile.id }, function (err, customer) {
        if (err) return cb(err);
        //user exist, so we return user to passport
        if (customer) {
          return cb(null, customer);
        } else {
          // we have a new student via OAuth!
          var newCustomer = new Customer({
            name: profile.displayName,
            email: profile.emails[0].value,
            googleId: profile.id,
          });
          newCustomer.save(function (err) {
            if (err) return cb(err);
            return cb(null, newCustomer);
          });
        }
      });
    }
  )
);

//Boilder plates below
//converts (name:'Jane') --> into session ID
passport.serializeUser(function (customer, done) {
  done(null, customer.id);
});
//converts into session ID -->  (name:'Jane')
passport.deserializeUser(function (id, done) {
  Customer.findById(id, function (err, customer) {
    done(err, customer);
  });
});
