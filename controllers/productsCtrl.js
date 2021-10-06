var Product = require("../models/product.js");

module.exports = {
    testP,
    display,
};


async function testP(req,res){
   await Product.create({product_name: 'Jane'})
res.send ('coolio')
}



  async function display(req, res) {
    await Product.find({}, function (err, product) {
        res.render("menues/menu.ejs", { product});
    });
  }


// async function create(req,res){
//     let userInput = req.body;
//     //using mongoose fn create
//     let newinput = await Flight.create({
//         airline: userInput.airline,
//         airport : userInput.airport,
//         flightNo : userInput.flightNo,
//         departs : userInput.departs,
//     })
//     console.log('userinput', userInput)
//     console.log('flight',newinput)
// res.redirect('/orders')
// }