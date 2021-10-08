var express = require("express");
var router = express.Router();
const customersCtrl = require("../controllers/customersCtrl.js");
const passport = require("passport");

router.get("/admin", customersCtrl.index);
router.get("/orders", customersCtrl.orderLogin);

router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "select_account",
  })
);

// Google OAuth callback route
//I need success routes to split into admin and customer
router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    //no matte what, if logged in,m yo're going to /orders/admin
    //give if statment in orders routes.+ ctrl
    successRedirect: "/orders/customer",
    failureRedirect: "/customers",
  })
);

// OAuth logout route
//setting req.user to be null and re-directing it.
router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/home");
});

module.exports = router;
