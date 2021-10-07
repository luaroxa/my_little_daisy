const Customer = require("../models/customer.js");

module.exports = {
  index,
  login,
  //   addFact,
  //   delFact
};

function index(req, res, next) {
  console.log("user", req.user);
  console.log(req.query);
  res.render("customers.ejs", {
    // req.user is how your server knows who is logged in
    customer: req.user, // req.user will be like {name:“eric”,googleId:“123”,cart:[],}
  });
}


function login(req, res, next) {
  if (!customer) {
    res.redirect('/orders', {error: 'Invalid Credentials'})
  }
  if (customer && customer.id === '615f1f1a17bc87ae562c659a') {
    res.redirect('/orders/view', {error: 'Invalid Credentials'})
  }
}



//   const pw = await bcrypt.compareSync(req.body.password, user.password)
//   if (!pw) res.render('login', {error: 'Invalid Credentials'})
  
//   req.session.user = user._id
//   res.redirect('/index')
// }

// function addFact(req, res, next) {
//   req.user.facts.push(req.body);
//   req.user.save(function(err) {
//     res.redirect('/students');
//   });
// }

