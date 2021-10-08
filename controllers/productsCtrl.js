var Product = require("../models/product.js");

module.exports = {
  menu,
  display,
  create,
  delProduct,
};

// async function testP(req,res){
//    await Product.create({product_name: 'Jane'})
// res.send ('coolio')
// }

// this will put a performerid like "123" to the cast: []
// function addToproductChoice(req,res) {
//   console.log("our form data is:", req.body)
//    const orderId = req.params.id; 
//    Order.findById(orderId, function(err, order) {

//     // if(err) {console.log(err)}

//      order.productChoice.push(req.body.productChoiceId)
//      order.save(function(err) {
//       console.log("the final movie is", order)
//       res.redirect('/orders/customer');
//      })
//    })
// }


async function create(req, res) {
  // let input = req.body; to check
  let newProduct = await Product.create({
    productName: req.body.productName,
    productType: req.body.productType,
    productFlavor: req.body.productFlavor,
    price: req.body.price,
  });
  // console.log('newProduct', req.body); to check
  // console.log('input', input); to check
  console.log("product", newProduct);
  res.redirect("/products-current");
}


//failed 50%
async function menu(req, res) {
  const caneles  = await Product.find({ productType: 'Canele' });
  const cookies  = await Product.find({ productType: 'Ugly Cookie' });
  console.log('canele', caneles)
  console.log('cookies', cookies)
    res.render("menues/menu.ejs", { caneles, cookies });
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

// function delProduct(req, res, next) {
//   Product.findOne({'id': req.params.id}, function(err, product) {
//     product.id(req.params.id).remove();
//     product.save(function(err) {
//       res.redirect("products-current.ejs");
//     });
//   });
// }

