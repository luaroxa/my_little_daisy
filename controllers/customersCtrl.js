
const Customer = require("../models/customer.js");

module.exports = {
 index,
//   addFact,
//   delFact
};

// function brit(req, res, next) {
//     console.log('req.user', req.user)
//   console.log(req.query)
//   // Make the query object to use with Student.find based up
//   // the user has submitted the search form or now

//   // Default to sorting by name

//   Customer.find(modelQuery)
//   .sort(sortKey).exec(function(err, customers) {
//     if (err) return next(err);
//     // Passing search values, name & sortKey, for use in the EJS
//     res.render('customers.ejs', {
//       customers,
//       user: req.user,
//       name: req.query.name,
//       sortKey
//     });
//   });
// }

function index(req, res, next) {
    console.log('user', req.user)
    console.log(req.query)
      res.render('customers.ejs', {
        // req.user is how your server knows who is logged in
        user: req.user // req.user will be like {name:“eric”,googleId:“123”,cart:[],}
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
