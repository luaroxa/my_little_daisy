const Customer = require("../models/customer.js");

module.exports = {
  index,
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

// const login = async(req, res) => {
//   const user = await User.findOne({username: req.body.username})
//   if (!user) res.render('login', {error: 'Invalid Credentials'})

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

