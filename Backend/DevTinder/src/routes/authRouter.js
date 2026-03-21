// This will have api definition of auth related routes - signup, login, logout, etc.

const express = require("express");
const authRouter = express.Router();

const signUpValidation = require("../../utils_Or_helper/validationFile/signUpValidator");
const loginValidator = require("../../utils_Or_helper/validationFile/loginValidator");
const bcrypt = require("bcrypt");
const UserModel = require("../models/user");

authRouter.post("/signup", signUpValidation, async (req, res) => {
  try {
    const { firstName, lastName, email, password, gender } = req.body;
    // Hashing the password using bcrypt library
    const hashedPassword = await bcrypt.hash(password, 10);
    // Creating the instance of UserModel to save data to database with userObject
    const user = new UserModel({
      firstName,
      lastName,
      email,
      gender,
      password: hashedPassword,
    });
    // Saving the data to database
    await user.save();
    // Sending the response to the client
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.error("Error creating user", err);
    // res.status(500).json({ message: "Error creating user" });
    // Status code is 400 because the error is due to the bad request from the client
    res.status(400).json({
      message: err.message,
    });
  }
});

authRouter.post("/login", loginValidator, async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // selecting password field explicitly because it is set to select: false in the schema
    const user = await UserModel.findOne({ email: email }).select("+password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    // Checking if the password is valid using the method defined in the user schema
    const isPasswordValid = await user.validatePassword(password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }
    // Generating the JWT token using the method defined in the user schema
    const token = user.getJWT();
    res.cookie("token", token, { maxAge: 3600000 }); // 1 hour in milliseconds
    res.status(200).json({ message: "User logged in successfully" });
  } catch (err) {
    console.error("Error logging in", err);
    res.status(400).json({ message: err.message });
  }
});

authRouter.post("/logout", (req, res) => {
  try {
    res.clearCookie("token"); // Clearing the token from the cookie -> as a result user will be logged out 
    res.status(200).json({ message: "User logged out successfully" });
  } catch (err) {
    console.error("Error logging out", err);
    res.status(400).json({ message: err.message });
  }
});

module.exports = authRouter;
