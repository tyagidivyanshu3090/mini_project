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
      enum: ["pending", "ignored", "accepted", "rejected"],
      default: "pending",
      message: "Invalid status. {VALUE} is not supported.",
    },
  },
  {
    timestamps: true,
  },
);

const ConnectionRequestModel = mongoose.model(
  "ConnectionRequest",
  connectionRequest,
);
module.exports = ConnectionRequestModel;
