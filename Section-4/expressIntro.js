// import express
const express = require("express");

// create an instance of express
const app = express();

// handle requests/ routes
app.get("/users/:id", (req, res) => {
  console.log("in the route!");

  console.log(req.params);

  res.status(200).json({
    status: "success",
    message: "you are in the root route",
  });
});


// listen for requests
app.listen(3000, "127.0.0.1", (err) => {
  console.log("starting express server!");
});
