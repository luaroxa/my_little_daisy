var express = require("express");
var router = express.Router();
const passport = require("passport");

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log('we are live')
  res.redirect("/home");
});


module.exports = router;
