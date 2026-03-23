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
      enum: ["interested", "ignored", "accepted", "rejected"],
      default: "pending",
      message: "Invalid status. {VALUE} is not supported.",
    },
  },
  {
    timestamps: true,
  },
);

// ConnectionRequestModel: This is the model for the connection request. Used to interact with the database.
// ConnectionRequest: This is the collection name in the database. it will be stored in small letters in the database.
// connectionRequest: This is the schema for the connection request.

const ConnectionRequestModel = mongoose.model(
  "ConnectionRequest",
  connectionRequest,
);
module.exports = ConnectionRequestModel;
