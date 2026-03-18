// This middleware is used to authenticate the user: [ 3 steps ]
// 1. Check if the token is present in the request.
// 2. Verify the token.
// 3. Find the user by the token.

const jwt = require("jsonwebtoken");
const UserModel = require("../models/user");

const SecretKey = "DevTinder@$3090";

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Unauthorised" });
    }

    const decodedToken = jwt.verify(token, SecretKey); // returns the decoded value
    const { id } = decodedToken; // destructuring the decoded id which is used to get the user
    const user = await UserModel.findById(id); // finding the user by the token
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    req.user = user; // attaching the user to the request
    next(); // passing the request to the next middleware
  } catch (err) {
    console.error("Error in authMiddleware", err);
    res.status(500).json({ message: "Error in authMiddleware" });
  }
};

module.exports = authMiddleware;
