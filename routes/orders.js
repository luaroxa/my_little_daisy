var express = require("express");
var router = express.Router();
const ordersCtrl = require("../controllers/ordersCtrl.js");

//prefix route
router.get('/', ordersCtrl.index);
// sending you to new form page to fill out
router.get('/new', ordersCtrl.newOrder);
// post method to create data.
router.post('/order/thankyou', ordersCtrl.create);

module.exports = router;