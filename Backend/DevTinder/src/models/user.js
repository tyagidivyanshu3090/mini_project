const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true, // Mandatory field
    minLength: 2,
    trim: true,
  },
  lastName: String, // Defining the type of the variable directly
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
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
  photoUrl: {
    type: String,
    default: "https://cdn-icons-png.flaticon.com/512/149/149071.png", // Default value for the photoUrl
  },
  about: {
    type: String,
    default: "To be updated",
  },
  skills: {
    type: [String], // Array of strings
    default: [],
  },
});

// Creating a model from the schema -> which is used for interacting with the database
const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
