var express = require("express");
var router = express.Router();
const productsCtrl = require("../controllers/productsCtrl.js");
const passport = require("passport");

// router.get('/testP', productsCtrl.testP);
router.get("/menu", productsCtrl.menu);
router.get("/products-current", productsCtrl.display);
router.post("/products-current", productsCtrl.create);

router.delete("/products-current/:id", productsCtrl.delProduct);

// route for adding a performer to a movie
// router.post('/orders/customer', productsCtrl.addToproductChoice);

module.exports = router;

// post method to create data.
// router.post('/order/thankyou', ordersCtrl.create);
