const express = require("express");
const app = express();
const { connectDB } = require("./config/database");
const UserModel = require("./models/user");

const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const authMiddleware = require("./middleware/authMiddleware");

const authRouter = require("./routes/authRouter");
const profileRouter = require("./routes/profileRouter");

const PORT = 3000;

// Middleware to parse JSON request body for all the routes.
app.use(express.json());

// Middleware to parse cookies for all the routes.
app.use(cookieParser());

// Creating the post Route handler to save data to database
app.use("/auth", authRouter);

//
app.use("/profile", profileRouter);

app.get("/all-user", authMiddleware, async (req, res) => {
  try {
    // Fetching all the data from database
    const users = await UserModel.find();
    // Sending the response to the client
    res.status(200).json(users);
  } catch (err) {
    res.status(500).send("Error fetching users");
  }
});

app.delete("/deleteuser", async (req, res) => {
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

app.patch("/updateuser", async (req, res) => {
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
