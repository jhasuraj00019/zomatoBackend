const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = Schema({
  // _id: {
  //   type: String,
  // },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  mobileNumber: {
    type: String,
    required: false,
    unique: true
  },
});

module.exports = mongoose.model("user", userSchema, "users");
