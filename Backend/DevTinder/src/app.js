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

// Handling multiple route handlers for a GET request
app.get(
  "/user/status",
  (req, res, next) => {
    // This function acts as a 'gatekeeper' or 'logger'.
    console.log("Middleware executed: Checking conditions...");

    // IMPORTANT: next() is called to pass control to the second function.
    // If you remove next(), the request will hang and never reach the next handler.
    next();
  },

  // 3. The Final Route Handler (Request Handler)
  (req, res) => {
    // This function is responsible for ending the request-response cycle.
    // It sends the final data back to the client.
    res.status(200).json({
      message: "User status",
    });
  },
);

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
