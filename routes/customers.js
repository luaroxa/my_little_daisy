var express = require("express");
var router = express.Router();
const customersCtrl = require("../controllers/customersCtrl.js");
const passport = require('passport')

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// Google OAuth callback route
//I need success routes to split into admin and customer
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/orders/admin',
    failureRedirect : '/orders'
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/home');
});


/* GET home page. */
// don't call it /index. 
router.get('/', customersCtrl.index);



router.get('/test', customersCtrl.test);





module.exports = router;