const express = require("express");
const app = express();
const adminAuth = require("./middleware/adminAuth");

const PORT = 3000;

// Calling the adminAuth for authentication of admin and then passing the request to the route handler
app.use("/admin", adminAuth);

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
