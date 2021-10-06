var Product = require("../models/product.js");

module.exports = {
    // testP,
    menu,
    display,
    create,
};


// async function testP(req,res){
//    await Product.create({product_name: 'Jane'})
// res.send ('coolio')
// }
async function create(req,res){
    let input = req.body;
    let newProduct = await Product.create({
        productName: req.body.productName,
        productType : req.body.productType,
        productFlavor : req.body.productFlavor,
        price : req.body.price,
    });
    console.log('newProduct', req.body);
    console.log('input', input);
    console.log('product',newProduct);
    res.redirect("/products/products-current");
}


  async function menu(req, res) {
    await Product.find({}, function (err, product) {
        res.render("menues/menu.ejs", { product});
    });
  }
  async function display(req, res) {
    await Product.find({}, function (err, product) {
        res.render("products-current.ejs", { product});
    });
  }


