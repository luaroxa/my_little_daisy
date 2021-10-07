const mongoose = require("mongoose");
const Schema = mongoose.Schema;

orderSchema = new Schema(
  {
    customer: [{ type: Schema.Types.ObjectId, ref: "Customers" }],
    pickupLocation: {
      type: String,
      enum: ["Downtown SW", "Dalhousie NW"],
    },
    product: [{ type: Schema.Types.ObjectId, ref: "Products" }],
    // product: {
    //   type: String,
    // },
    quantity: {
      type: Number,
    },
    price: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

//I need product/flavour/price

module.exports = mongoose.model("Order", orderSchema);
