const mongoose = require('mongoose');
const Schema = mongoose.Schema;


 orderSchema = new Schema({
  customerName: {
    type: String,
  },
  customerPhone: {
    type: String,
  },
  pickupLocation: {
    type: String,
    enum: ['Downtown SW', 'Dalhousie NW']
  },
  product: {
    type: String,
    //or should I reference the product 
  },
  quantity: {
    type: Number,
  },
  total: {
    type: Number,
  },

}, {
  timestamps: true
});

//I need product/flavour/price

module.exports = mongoose.model('Order', orderSchema);