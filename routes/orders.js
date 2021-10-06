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
// don't call it /index. 
router.get('/', ordersCtrl.index);
router.get('/test', ordersCtrl.test);


//to view all the orders for ADMIN
router.get('/view', ordersCtrl.viewAllOrder);

//to see order form for a customer
router.get('/customer', ordersCtrl.viewForm);
// to submit the form 
router.post('/customer', ordersCtrl.create);





module.exports = router;