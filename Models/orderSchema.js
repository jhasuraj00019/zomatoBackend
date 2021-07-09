const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = Schema({
  // _id: {
  //   type: String,
  //   required: false
  // },
  RestaurantId: {
      type: String,
      required: true
  },
  userId: {
    type: String,
    required: true,
    
  },
  items: {
    type: Array,
    required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    
    time: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model("orderHistory", orderSchema, "orderHistory")
