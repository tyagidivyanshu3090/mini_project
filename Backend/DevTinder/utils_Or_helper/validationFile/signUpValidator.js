const validate = require("validator");

const signUpValidation = (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (!validate.isEmail(email)) {
    return res.status(400).json({ message: "Invalid email address" });
  }

  if (!validate.isStrongPassword(password)) {
    return res
      .status(400)
      .json({ message: "Password must be at least 6 characters long" });
  }
  
  // Call next() to pass control to the route handler
  next();
};

module.exports = signUpValidation;
