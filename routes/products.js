var express = require("express");
var router = express.Router();
const productsCtrl = require("../controllers/productsCtrl.js");
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
// router.get('/', function(req, res, next) {
//   res.render('order-index', { });
// });


// router.get('/testP', productsCtrl.testP);
router.get('/menu', productsCtrl.menu);
router.get('/products-current', productsCtrl.display);
router.post('/products-current', productsCtrl.create);
module.exports = router;







// post method to create data.
// router.post('/order/thankyou', ordersCtrl.create);


