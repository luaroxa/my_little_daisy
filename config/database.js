const mongoose = require("mongoose");

// local DB
mongoose.connect('mongodb://localhost/my_litle_daisy',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//atlas DB
// mongoose.connect(process.env.DATABASE_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// shortcut to mongoose.connection objec
const db = mongoose.connection;

db.on("connected", function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});


