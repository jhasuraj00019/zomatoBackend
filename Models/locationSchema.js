//connectin to the MongoDB

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const locationSchema = Schema({
  _id: {
    type: Number,
    required: true,
  },
  city_name: {
    type: String,
    required: true,
  },
  city: {
    type: Number,
    required: true,
  },
  country_name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('location', locationSchema, 'location')
