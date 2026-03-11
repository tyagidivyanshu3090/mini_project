const express = require("express");
const app = express();
const adminAuth = require("./middleware/adminAuth");
const { connectDB } = require("./config/database");
const UserModel = require("./models/user");

const PORT = 3000;

// Creating the post Route handler to save data to database
app.post("/signup", async (req, res) => {
  // Creating the dummy data:
  const userObject = {
    firstName: "Divyanshu",
    lastName: "Tyagi",
    email: "divyanshu422@gmail.com",
    password: "[PASSWORD]",
    age: 29,
    gender: "Male",
  };
  // Creating the instance of UserModel to save data to database with userObject
  const user = new UserModel(userObject);
  // Saving the data to database
  await user.save();
  // Sending the response to the client
  res.status(201).json({ message: "User created successfully" });
});

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
