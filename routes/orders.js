var express = require("express");
var router = express.Router();
const ordersCtrl = require("../controllers/ordersCtrl.js");
const passport = require("passport");

/* GET home page. */
// don't call it /index.
// router.get("/", ordersCtrl.index);
router.get("/test", ordersCtrl.test);

//to view all the orders for ADMIN
//doo something like below!?
// router.post('/facts', isLoggedIn, studentsCtrl.addFact);
router.get("/orders/view", ordersCtrl.viewAllOrder);


//to see order form for a customer
router.get("/orders/customer", ordersCtrl.viewForm);
// to submit the form
router.post("/orders/customer", ordersCtrl.create);

module.exports = router;
