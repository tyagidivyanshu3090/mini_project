// 1. with the usage of authmiddleware, we get the info of the user [ through token ]
// 2. 4 corner cases: checking the toUser exist in db or not, checking whether connection already exist, checking the status is valid, checking the fromUser is same as toUser

const express = require("express");
const connectionRouter = express.Router();

const ConnectionRequestModel = require("../models/connectionRequest");
const authMiddleware = require("../middleware/authMiddleware");
const UserModel = require("../models/user");

connectionRouter.post(
  "/send/:status/:userId",
  authMiddleware,
  async (req, res) => {
    try {
      const fromUser = req.user._id; // getting user from the authMiddleware
      const toUser = req.params.userId;
      const status = req.params.status;

      if (fromUser === toUser) {
        return res
          .status(400)
          .json({ message: "You cannot send connection request to yourself" });
      }
      // checking if the status is valid
      const allowedStatus = ["interested", "ignored"];
      if (!allowedStatus.includes(status)) {
        return res.status(400).json({ message: "Invalid status" });
      }

      // Checking the toUser exist in db or not
      const toUserExists = await UserModel.findById(toUser);
      if (!toUserExists) {
        return res.status(404).json({ message: "User not found" });
      }

      // checking whether connection already exist:
      // $or condition: checks if either of the condition is true [ either fromUser -> toUser or toUser -> fromUser ]
      const existingConnection = await ConnectionRequestModel.findOne({
        $or: [
          { fromUser, toUser },
          { fromUser: toUser, toUser: fromUser },
        ],
      });
      if (existingConnection) {
        return res
          .status(400)
          .json({ message: "Connection request already sent" });
      }

      // Creating the instance of ConnectionRequestModel
      const connectionRequest = new ConnectionRequestModel({
        fromUser,
        toUser,
        status,
      });
      // Saving the connection request in database
      const savedConnectionRequest = await connectionRequest.save();
      res.status(200).json({
        message: "Connection request sent successfully",
        savedConnectionRequest,
      });
    } catch (error) {
      console.error("Error sending connection request", error);
      res
        .status(500)
        .json({
          message: "Error sending connection request",
          error: error.message,
        });
    }
  },
);

module.exports = connectionRouter;
