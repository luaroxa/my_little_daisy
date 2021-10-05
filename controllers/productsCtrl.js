var Order = require("../models/order.js");

module.exports = {
    index,
    test,
};


async function test(req,res){
   await Order.create({customer_name : 'Jane'})
res.send ('thanks')
}

function index(req,res){
    //brining all the data in DB, using MG fn
    // is it flight or flightS? or up to me?  
    //seems like it's whateverI call. 
    Order.find({}, function(err,order){
        res.render('orders/orders-form.ejs', {order:order})
    });
}


async function create(req,res){
    let userInput = req.body;
    //using mongoose fn create
    let newinput = await Flight.create({
        airline: userInput.airline,
        airport : userInput.airport,
        flightNo : userInput.flightNo,
        departs : userInput.departs,
    })
    console.log('userinput', userInput)
    console.log('flight',newinput)
res.redirect('/orders')
}