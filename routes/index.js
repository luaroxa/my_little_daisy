var express = require('express');
var router = express.Router();
const passport = require('passport')

// // Google OAuth login route
// router.get('/auth/google', passport.authenticate(
//   'google',
//   { scope: ['profile', 'email'] }
// ));

// // Google OAuth callback route
// //I need success routes to split into admin and customer
// router.get('/oauth2callback', passport.authenticate(
//   'google',
//   {
//     successRedirect : '/students',
//     failureRedirect : '/students'
//   }
// ));

// // OAuth logout route
// router.get('/logout', function(req, res){
//   req.logout();
//   res.redirect('/home');
// });


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
