var express = require("express");
var router = express.Router();
const ordersCtrl = require("../controllers/ordersCtrl.js");
const passport = require('passport')

// below is how I called it
// app.use("/orders", require("./routes/orders.js"));

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
router.get('/', function(req, res, next) {
  res.render('order-index', { });
});


module.exports = router;


router.get('/test', ordersCtrl.test);

//prefix route
router.get('/', ordersCtrl.index);
// sending you to new form page to fill out

//this is what we are using
//and what

router.get('/new', ordersCtrl.newOrder);




// post method to create data.
router.post('/order/thankyou', ordersCtrl.create);




module.exports = router;