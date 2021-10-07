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
    user: req.user, // req.user will be like {name:“eric”,googleId:“123”,cart:[],}
  });
}

// function addFact(req, res, next) {
//   req.user.facts.push(req.body);
//   req.user.save(function(err) {
//     res.redirect('/students');
//   });
// }

// function delFact(req, res, next) {
//   Student.findOne({'facts._id': req.params.id}, function(err, student) {
//     student.facts.id(req.params.id).remove();
//     student.save(function(err) {
//       res.redirect('/students');
//     });
//   });
// }
