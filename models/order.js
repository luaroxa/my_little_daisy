const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const orderSchema = new Schema({
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
  subtotal: {
    type: Number,
  },
  tip: {
    type: Number,
  },
  tax: {
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