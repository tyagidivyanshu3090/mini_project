const express = require("express");
const app = express();

const PORT = 3000;

// Implementing the middleware using the app.use()
const KEY = "xyz";

app.use((req, res, next) => {
  const { key } = req.query;

  if (key === KEY) {
    next();
  } else {
    res.status(401).json({
      message: "Unauthorized",
    });
  }
});

// Implementing the route handler
app.get("/user", (req, res) => {
  res.status(200).json({
    name: "Divyanshu",
    age: 21,
    city: "Delhi",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
