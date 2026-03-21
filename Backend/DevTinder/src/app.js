const express = require("express");
const app = express();
const { connectDB } = require("./config/database");
const UserModel = require("./models/user");

const cookieParser = require("cookie-parser");

const authRouter = require("./routes/authRouter");
const profileRouter = require("./routes/profileRouter");

const PORT = 3000;

// Middleware to parse JSON request body for all the routes.
app.use(express.json());

// Middleware to parse cookies for all the routes.
app.use(cookieParser());

// Creating the post Route handler to save data to database
app.use("/auth", authRouter);
app.use("/profile", profileRouter);



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
