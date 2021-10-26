var express = require("express");
var router = express.Router();
const ordersCtrl = require("../controllers/ordersCtrl.js");
const passport = require("passport");

router.get("/orders/view", ordersCtrl.viewAllOrder);


//to see order form for a customer
router.get("/orders/customer", ordersCtrl.viewForm);
// to submit the form
router.post("/orders/customer", ordersCtrl.create);

module.exports = router;
