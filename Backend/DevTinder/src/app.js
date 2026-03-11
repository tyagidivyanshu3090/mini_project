const express = require("express");
const app = express();
const adminAuth = require("./middleware/adminAuth");
const { connectDB } = require("./config/database");

const PORT = 3000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Database connection failed", err);
  }
};

startServer();
