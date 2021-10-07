var express = require('express');
var router = express.Router();
const passport = require('passport')

//NEXT 3 CODE BLOCKS ARE THE BOILER PLATE TO SET UP ROUTES! 

// // Google OAuth login route
//LOGIN BUTTON WILL DIRECT USERS TO THIS. 
//THIS WILL TKAE USER TO GOOGLE.

// router.get('/auth/google', passport.authenticate(
//   'google',
//   { scope: ['profile', 'email'] }
// ));

// // Google OAuth callback route
//THIS WILL HANDLE THE USER COMING BACK FROM GOOGLE
// //I need success routes to split into admin and customer
// router.get('/oauth2callback', passport.authenticate(
//   'google',
//   {
//     successRedirect : '/students',
//     failureRedirect : '/students'
//   }
// ));

// // OAuth logout route
//IT SIMPLY SETS REQ.SUER = NULL
// router.get('/logout', function(req, res){
//   req.logout();
//   res.redirect('/home');
// });


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
