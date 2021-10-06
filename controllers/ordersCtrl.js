
var Order = require("../models/order.js");

module.exports = {
    index,
    create,
    test,
    viewAllOrder,
};




async function test(req,res){
   await Order.create({customer_name : 'Jane'})
res.send ('thanks')
}

// where I will display log-in
//dpend on the admin, you get directed to 2 diff page.
function index(req, res) {
    Order.find({}, function(err,order){
        res.render('orders/order-index.ejs')
    });
  };
  

// function indexB(req,res){
//     //brining all the data in DB, using MG fn
//     // is it flight or flightS? or up to me?  
//     //seems like it's whateverI call. 
//     Order.find({}, function(err,order){
//         res.render('orders/orders-form.ejs', {order:order})
//     });
// }




// can't use new. new is reserved.
// function newOrder(req,res){
//     res.render('orders/orders-form.ejs')
// }

async function create(req,res){
    let userInput = req.body;
    //using mongoose fn create
    let customerOrder = await Order.create({
        customerName: req.body.customerName,
        customerPhone : req.body.customerPhone,
        pickupLocation : req.body.pickupLocation,
        product : req.body.product,
        quantity : req.body.quantity,
        quantity : req.body.quantity,
    })
    console.log('userinput', userInput)
    console.log('customerOrder', customerOrder)
res.redirect('/orders')
}

// displaying all of customer orders
async function viewAllOrder(req, res) {
    await Order.find({}, function (err, orders) {
        res.render("orders/order-admin-orderList.ejs", { orders});
    });
  }

//how to add async and await here? I think my syntax is wrong and gave me error.
// function show(req,res){
//     let incomingId = req.params.id 
//      let specificFlight = Flight.findById(incomingId, function(err, flight){
//     });
//     console.log('id is', req.params.id)
//     console.log(specificFlight)
//     res.render('flights/flights-detail.ejs', {specificFlight:specificFlight})
// }

// function show(req, res) {
//     Flight.findById(req.params.id, function(err, flight) {
//       res.render('flights/flights-detail.ejs', { flight });
//     });
//   }