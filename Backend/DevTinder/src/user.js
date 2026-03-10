const moongose = require("mongoose");

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
