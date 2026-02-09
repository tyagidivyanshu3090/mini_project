// Creating the server

const express = require("express");
const app = express();

const PORT = 3000;

// Route Handler for GET user: Getting the user
app.get("/user", (req, res) => {
  res.status(200).json({
    name: "Divyanshu",
    age: 21,
    city: "Delhi",
  });
});

// Route Handler for Post User: Creating the user
app.post("/user", (req, res) => {
  res.status(200).json({
    message: "User created successfully",
  });
});

// Route Handler for Delete User: Deleting the user
// :id is the dynamic parameter -> query parameter
// Api -> http://localhost:3000/user/:21
app.delete("/user/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    message: `User with id ${id} deleted successfully`,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


