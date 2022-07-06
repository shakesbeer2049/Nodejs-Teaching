const http = require("http");
const fs = require("fs");

// 1. Make the server
const server = http.createServer(function (req, res) {
  console.log("in the main function");

  if (req.url === "/") {
    return res.end("<h1>This is the root page</h1>");
  }

  if (req.url === "/baby") {
    res.end("<h1>Heloooo babyyyy!!!</h1>");
  }

  if (req.url === "/showmetext") {
    return res.end(
      "<h1>this is the attendence page!</h1><p>this is the text</p>"
    );
  }

  if (req.url === "/showdata") {
    const dataToDisplay = fs.readFileSync("./sample-text.txt", "utf-8");
    res.end(dataToDisplay);
  }

  if (req.url === "/students") {
    return res.end("this is the students page");
  }

  return res.end("404");
});

// 2. Start the server
server.listen(3000, "127.0.0.1", function () {
  // this only runs when the server successfully starts.
  console.log("starting server!");
});

// Handle the root route so that the request-response cycle ends
// Handle some routes

// Challenge: send the text data of the file in the route
