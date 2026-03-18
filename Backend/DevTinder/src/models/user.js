const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
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
      validate: {
        validator: function (value) {
          if (!validator.isEmail(value)) {
            throw new Error("Invalid email address: " + value);
          }
        },
      },
    },
    password: {
      type: String,
      required: true,
      select: false, // This will not be returned in the response. Hence it is not visible to the client
    },
    age: {
      type: Number,
      min: 18, // Defining the minimum value of the variable
    },
    gender: {
      type: String,
      trim: true,
      lowercase: true,
      // validator(value) {
      //   if (!["male", "female", "other"].includes(value)) {
      //     throw new Error("Invalid gender");
      //   }
      // },
      enum: {
        values: ["male", "female", "other"], // enum is used to validate the value of the field. It is a list of allowed values.
        message: "Invalid gender. {VALUE} is not supported.", // {VALUE} is a special Mongoose placeholder
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
  },
  { timestamps: true },
);

// Attaching the getJWT method to the userSchema -> which is used to generate the JWT token.
// this keyword refers to the user object. Becoz of usage of this key we cant use arrow function here.
userSchema.method.getJWT = function () {
  const user = this;
  return jwt.sign({ id: user._id }, "DevTinder@$3090", {
    expiresIn: "1h",
  });
};

// Creating a model from the schema -> which is used for interacting with the database
const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
