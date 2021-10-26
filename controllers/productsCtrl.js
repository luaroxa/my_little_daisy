var Product = require("../models/product.js");

module.exports = {
  menu,
  display,
  create,
  delProduct,
};

async function create(req, res) {
  let newProduct = await Product.create({
    productName: req.body.productName,
    productType: req.body.productType,
    productFlavor: req.body.productFlavor,
    price: req.body.price,
  });
  console.log("product", newProduct);
  res.redirect("/products-current");
}


//failed 50%
async function menu(req, res) {
  const caneles  = await Product.find({ productType: 'Canele' });
  const cookies  = await Product.find({ productType: 'Ugly Cookie' });
  const cheeseCake  = await Product.find({ productType: 'Cheese Cake' });
  console.log('canele', caneles)
  console.log('cookies', cookies)
    res.render("menues/menu.ejs", { caneles, cookies, cheeseCake });
  };



// [For PRODUCT LIST]
// showing full list of products
async function display(req, res) {
  await Product.find({}, function (err, product) {
    res.render("admin/products-current.ejs", { product });
  });
}

//I want delete button
function delProduct(req, res, next) {
  Product.findOne({'_id': req.params.id}, function(err, product) {
    product.remove();
    product.save(function(err) {
      res.redirect("/products-current");
    });
  });
}


