// const validator = require("validator"); -> No need of this in checking allowed fields

const profileUpdateValidator = (req, res, next) => {
  // * Whitelist allowed fields
  const allowedEditField = [
    "firstName",
    "lastName",
    "age",
    "gender",
    "photoUrl",
    "about",
    "skills",
  ];
  const { email, ...updateData } = req.body;
  const unAllowedFields = Object.keys(updateData).filter((key) => {
    return !allowedEditField.includes(key);
  });
  if (unAllowedFields.length > 0) {
    return res
      .status(400)
      .json({ message: "Invalid update fields", error: unAllowedFields });
  }
  next();
};

module.exports = profileUpdateValidator;
