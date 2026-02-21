const express = require("express");
const app = express();

const PORT = 3000;

// Implementing the middleware using the app.use()
const ADMIN_KEY = "xyz";

app.use("/admin", (req, res, next) => {
  const { key } = req.query;

  if (key === ADMIN_KEY) {
    next();
  } else {
    res.status(401).json({
      message: "Unauthorized",
    });
  }
});

// Implementing the route handler
app.get("/admin/users", (req, res) => {
  res.status(200).json({
    name: "Divyanshu",
    age: 21,
    city: "Delhi",
  });
});

app.delete("/admin/users", (req, res) => {
  res.status(200).json({
    message: "User deleted successfully",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
