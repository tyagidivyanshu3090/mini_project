// Logic for connecting to database: Mongoose library is used

const mongoose = require("mongoose");
// It is best practice to store this in a .env file
const mongoURI =
  "mongodb+srv://devTinder:Divyanshu3090%40@cluster0.3wshelt.mongodb.net/devTinder";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("✅ Connected to MongoDB Atlas");
  } catch (error) {
    console.error("❌ Connection error:", error.message);
    process.exit(1);
  }
};

module.exports = { connectDB };
