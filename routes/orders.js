var express = require("express");
var router = express.Router();
const ordersCtrl = require("../controllers/ordersCtrl.js");
const passport = require("passport");

/* GET home page. */
// don't call it /index.
router.get("/", ordersCtrl.index);
router.get("/test", ordersCtrl.test);

//to view all the orders for ADMIN
router.get("/view", ordersCtrl.viewAllOrder);

//to see order form for a customer
router.get("/customer", ordersCtrl.viewForm);
// to submit the form
router.post("/customer", ordersCtrl.create);

module.exports = router;
