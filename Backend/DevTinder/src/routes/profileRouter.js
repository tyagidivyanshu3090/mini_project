// This will have api definition of profile related routes - get profile, update profile, etc.

const express = require("express");
const profileRouter = express.Router();

const UserModel = require("../models/user");
const authMiddleware = require("../middleware/authMiddleware");
const profileUpdateValidator = require("../../utils_Or_helper/validationFile/profileUpdateValidator");

profileRouter.get("/view", authMiddleware, async (req, res) => {
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

profileRouter.patch(
  "/update",
  authMiddleware,
  profileUpdateValidator,
  async (req, res) => {
    try {
      const { email, ...updateData } = req.body;
      const user = await UserModel.findOne({ email });
      if (!user) {
        res.status(404).json({ message: "User not found" });
      }
      const updatedUser = await UserModel.findByIdAndUpdate(
        user._id,
        updateData,
        {
          new: true,
          runValidators: true,
        },
      );
      res.status(200).json({ message: "User updated successfully" });
    } catch (err) {
      console.error("Error  updating user", err);
      res.status(400).json({ message: err.message });
    }
  },
);

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

profileRouter.delete("/deleteuser", async (req, res) => {
  try {
    const email = req.query.email;
    const userFind = await UserModel.findOne({ email: email });
    if (userFind === null) {
      return res.status(404).json({ message: "User not found" });
    }
    const user = await UserModel.deleteOne({ email: email });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    console.error("Error deleting user", err);
    res.status(500).json("Error deleting user");
  }
});

profileRouter.patch("/updateuser", async (req, res) => {
  try {
    const userId = req.query.id;
    const data = req.body;
    const ALLOWED_UPDATE_FIELDS = [
      "firstName",
      "lastName",
      "age",
      "gender",
      "photoUrl",
      "about",
      "skills",
    ];

    const isUpdateAllowed = Object.keys(data).every((key) => {
      return ALLOWED_UPDATE_FIELDS.includes(key);
    });

    const unAllowedFields = Object.keys(data).filter((key) => {
      return !ALLOWED_UPDATE_FIELDS.includes(key);
    });

    if (unAllowedFields.length > 0) {
      return res
        .status(400)
        .json({ message: "Invalid update fields", error: unAllowedFields });
    }

    if (!isUpdateAllowed) {
      return res.status(400).json({ message: "Invalid update fields" });
    }
    if (req.body.skills.length > 10) {
      return res
        .status(400)
        .json({ message: "Skills cant be greater than 10" });
    }

    const user = await UserModel.findByIdAndUpdate(userId, req.body, {
      new: true,
      runValidators: true, // This will run the validators defined in the schema
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User updated successfully" });
  } catch (err) {
    console.error("Error updating user", err);
    res.status(500).json("Error updating user");
  }
});

module.exports = profileRouter;
