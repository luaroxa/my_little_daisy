var Order = require("../models/order.js");
const Customer = require("../models/customer.js");
const Product = require("../models/product.js");
const { findById } = require("../models/order.js");


module.exports = {
  create,
  test,
  viewAllOrder,
  viewForm,
};

async function test(req, res) {
  await Order.create({ customer_name: "Jane" });
  res.send("thanks");
}

async function viewForm(req,res) {
  try {  
    let orders = await Order.find();   
    let products = await Product.find();
    res.render("orders/order-customer-form.ejs", {
      products: products, orders
    })
  } catch(err) {
    console.log(err)
    res.redirect('/home')
  }
}

//create function
async function create(req, res) {
  let incomingUser2 = await Customer.findById(req.user._id);
  let customerOrder = await Order.create({
    customer: req.user._id,
    pickupLocation: req.body.pickupLocation,
    productChoice: req.body.productChoice,
    quantity: req.body.quantity,
  });
  res.render("orders/orders-ty.ejs", { customerOrder, customer: req.user, incomingUser2});
}


// displaying all of customer orders
async function viewAllOrder(req, res) {
  // let products = await Product.find()
  await Order.find({}, function (err, orders) {
    res.render("admin/order-admin-orderList.ejs", {  orders });
  });
}

