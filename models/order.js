const mongoose = require("mongoose");
const Schema = mongoose.Schema;

orderSchema = new Schema(
  {
    customer: { type: Schema.Types.ObjectId, ref: "Customer" },
    pickupLocation: {
      type: String,
      enum: ["Downtown SW", "Dalhousie NW"],
    },
    productChoice: [{ type: Schema.Types.ObjectId, ref: "Product" }],
    quantity: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

//I need product/flavour/price

module.exports = mongoose.model("Order", orderSchema);
