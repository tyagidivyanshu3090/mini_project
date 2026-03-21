// This will have api definition of profile related routes - get profile, update profile, etc.

const express = require("express");
const profileRouter = express.Router();

const UserModel = require("../models/user");
const authMiddleware = require("../middleware/authMiddleware");

profileRouter.get("/userbyemail", authMiddleware, async (req, res) => {
  try {
    const email = req.query.email;
    // Fetching the user from database by email
    const users = await UserModel.find({ email: email });
    // Sending the response to the client
    if (users.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(users);
  } catch (err) {
    res.status(500).send("Error fetching users");
  }
});

profileRouter.get("/all-user", authMiddleware, async (req, res) => {
  try {
    // Fetching all the data from database
    const users = await UserModel.find();
    // Sending the response to the client
    res.status(200).json(users);
  } catch (err) {
    res.status(500).send("Error fetching users");
  }
});

module.exports = profileRouter;
