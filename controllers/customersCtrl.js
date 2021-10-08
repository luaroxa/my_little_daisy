const { serializeUser } = require("passport");
const { replaceOne } = require("../models/customer.js");
const Customer = require("../models/customer.js");

module.exports = {
  index,
  orderLogin,

};

function index(req, res) {
  res.render("orders/order-index.ejs");
}

function orderLogin(req, res) {

  res.render("admin/login-order.ejs", {customer:req.user});
}

// function to direct users based on authority
// function login(req, res, next) {
//   if (!customer) {
//     res.redirect('/orders', {error: 'Invalid Credentials'})
//   }
//   if (customer && customer.id === '615f1f1a17bc87ae562c659a') {
//     res.redirect('/orders/view', {error: 'Invalid Credentials'})
//   }
// }

