const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true, // Mandatory field
    minLength: 2,
    maxLength: 20,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 20,
    trim: true,
  },
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
    trim: true,
    lowercase: true,
    validator(value) {
      if (!["male", "female", "other"].includes(value)) {
        throw new Error("Invalid gender");
      }
    },
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
