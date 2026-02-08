// Creating the server

const express = require("express");
const app = express();

const PORT = 3000;

app.use("/", (req, res) => {
  res.send("Welcome to life of backend");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
