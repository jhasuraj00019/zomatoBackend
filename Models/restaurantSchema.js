const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const restaurantSchema = Schema({
  _id: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  locality: {
    type: String,
    required: true,
  },
  city_name: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  area: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  thumb: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  contact_number: {
    type: Number,
    required: false,
  },
  type: {
    type: String,
    required: true,
  },
  Cuisine: {
    type: Array,
    required: true,
  },
  menu: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("restaurant", restaurantSchema, "restaurant");
