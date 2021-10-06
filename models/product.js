const mongoose = require("mongoose");
const Schema = mongoose.Schema;




productSchema = new Schema({
    productName: {
      type: String,
    },
    productType: {
        type: String,
        // enum: ["Cheese Cake","Ugly Cookie","Canele"]
      },
    productFlavor: {
      type: String,
    },
    price: {
      type: Number,
    },
    
  
  }, {
    timestamps: true
  });
  


// const productSchema = new Schema({
//     name: { type: 
//         String},
//     name_flavor: {
//       type: String,
//       // match: /[A-F][1-9]\d?$/,
//       required: true,
//     },
//     price: { type: Number, min: 0, required: true },
//   },
//   {
//     timestamps: true,
//   }
// );

module.exports = mongoose.model("Product", productSchema);
