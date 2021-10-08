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
  // let incomingCustomer = req.user;
  //using mongoose fn create
  let customerOrder = await Order.create({
    // customer: incomingCustomer.name,
    pickupLocation: req.body.pickupLocation,
    // product: req.body.product,
    quantity: req.body.quantity,

  });
  console.log("SUPPP");
  console.log("userinput", userInput);
  // console.log("incomingcus", incomingCustomer);
  console.log("customerOrder", customerOrder);
  res.render("orders/orders-ty.ejs", { customerOrder, customer: req.user});
}

// displaying all of customer orders
async function viewAllOrder(req, res) {
  // await Order.find({}, function (err, orders) {
    res.render("orders/order-admin-orderList.ejs", { orders });
  // });
}
