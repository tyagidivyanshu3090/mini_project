const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true, // Mandatory field
  },
  lastName: String, // Defining the type of the variable directly
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    min: 18, // Defining the minimum value of the variable
  },
  gender: {
    type: String,
  },
});

// Creating a model from the schema -> which is used for interacting with the database
const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
