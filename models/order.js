const mongoose = require('mongoose');
const Schema = mongoose.Schema;


 orderSchema = new Schema({
  customer_name: {
    type: String,
  },
  customer_phone: {
    type: String,
  },
  pickup_location: {
    type: String,
    enum: ['Downtown SW', 'Dalhousie NW']
  },
  product: {
    type: String,
    //or should I reference the product 
  },
  total: {
    type: Number,
  },

}, {
  timestamps: true
});

//I need product/flavour/price

module.exports = mongoose.model('Order', orderSchema);