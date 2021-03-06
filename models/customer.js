const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema(
  {
    name: String,
    email: String,
    googleId: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Customer", customerSchema);
