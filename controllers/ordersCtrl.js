var Order = require("../models/order.js");
const Customer = require("../models/customer.js");


module.exports = {
  // index,
  create,
  test,
  viewAllOrder,
  viewForm,
};

async function test(req, res) {
  await Order.create({ customer_name: "Jane" });
  res.send("thanks");
}

async function viewForm(req, res) {
  await Order.find({}, function (err, orders) {
    res.render("orders/order-customer-form.ejs", { orders });
  });
}

async function create(req, res) {
  let userInput = req.body;
  //using mongoose fn create
  let customerOrder = await Order.create({
    customerName: req.body.customerName,
    customerPhone: req.body.customerPhone,
    pickupLocation: req.body.pickupLocation,
    product: req.body.product,
    quantity: req.body.quantity,
    price: req.body.price,
  });
  console.log("userinput", userInput);
  console.log("customerOrder", customerOrder);
  res.render("orders/orders-ty.ejs", {customer: req.user});
}

// displaying all of customer orders
async function viewAllOrder(req, res) {
  // await Order.find({}, function (err, orders) {
    res.render("orders/order-admin-orderList.ejs", { orders });
  // });
}
