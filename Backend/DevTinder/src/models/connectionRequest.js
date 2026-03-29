const mongoose = require("mongoose");

const connectionRequest = new mongoose.Schema(
  {
    fromUser: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    toUser: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: {
        values: ["interested", "ignored", "accepted", "rejected"],
        message: "Invalid status. {VALUE} is not supported.",
      },
      default: "pending",
    },
  },
  {
    timestamps: true,
  },
);

connectionRequest.pre("save", function (next) {
  const connectionRequest = this; // this refers to the current document being saved which has fromUser, toUser, status and timestamp + id
  // Check if the fromUserId is the exact same as the toUserId
  if (connectionRequest.fromUser.equals(connectionRequest.toUser)) {
    throw new Error("You cannot send a connection request to yourself.");
  }
  // if (this.fromUser.equals(this.toUser)) {
  //   throw new Error("You cannot send a connection request to yourself.");
  // }

  // If everything is fine, move on to the next step (saving to the DB)
  next();
});

// ConnectionRequestModel: This is the model for the connection request. Used to interact with the database.
// ConnectionRequest: This is the collection name in the database. it will be stored in small letters in the database.
// connectionRequest: This is the schema for the connection request.

const ConnectionRequestModel = mongoose.model(
  "ConnectionRequest",
  connectionRequest,
);
module.exports = ConnectionRequestModel;
