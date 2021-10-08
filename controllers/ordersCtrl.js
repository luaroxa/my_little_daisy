var Order = require("../models/order.js");
const Customer = require("../models/customer.js");
const Product = require("../models/product.js");


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

// async function viewForm(req, res) {
//   // let products = await Product.find()
//   await Order.find({}, function (err, orders) {
//     res.render("orders/order-customer-form.ejs", {  orders });
//   });
// }

// async function viewForm(req, res) {
//   const orders  = await Order.find({});
//   const products  = await Product.find({});
//   console.log('canele', orders)
//   console.log('cookies', products)
//     res.render("orders/order-customer-form.ejs", { orders, products });
//   };




async function viewForm(req,res) {
  try {  
    let orders = await Order.find();
    // populate converts cast: ["12312","asdfsd"] -->
    //                        cast: {name:"Tom Cruise"},{name:"Alec Guinness"}
    // await orders.execPopulate('productChoice')

    
    let products = await Product.find();
    res.render("orders/order-customer-form.ejs", {
      products: products, orders
    })
  } catch(err) {
    console.log(err)
    res.redirect('/home')
  }
}

//////////////////

async function create(req, res) {
  let userInput = req.body;
  
  //using mongoose fn create
  let customerOrder = await Order.create({
    // customer: incomingCustomer.name,
    pickupLocation: req.body.pickupLocation,
    productChoice: req.body.productChoice,
    // product: req.body.product,
    quantity: req.body.quantity,

  });
  console.log("SUPPP");
  console.log("userinput", userInput);
  console.log("productS", customerOrder.productChoice);
  // console.log("product", product);
  // console.log("incomingcus", incomingCustomer);
  console.log("customerOrder", customerOrder);
  res.render("orders/orders-ty.ejs", { customerOrder, customer: req.user});
}


// displaying all of customer orders
async function viewAllOrder(req, res) {
  // let products = await Product.find()
  await Order.find({}, function (err, orders) {
    res.render("admin/order-admin-orderList.ejs", {  orders });
  });
}