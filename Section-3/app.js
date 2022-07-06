const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/hello" && req.method === "DELETE") {
    return res.end("creating user successful!");
  }

  if (req.url === "/getUserDetails" && req.method === "GET") {
    // Getting user from Database:
    const rayan = {
      name: "Rayan",
      job: "Designer",
    };

    const rayanJSON = JSON.stringify(rayan);

    res.writeHead(200, {
      "Content-Type": "Application/json",
      "sample-header": "tatata",
    });

    return res.end(rayanJSON);
  }

  if (req.url === "/getUserDetails" && req.method === "POST") {
    res.writeHead(200, {
      "Content-type": "Application/json",
    });

    return res.end("<h1>Heading</h1><p>this is a paragraph</p>");
  }

  res.writeHead(404);
  return res.end("not found!");
});

server.listen(3000, "127.0.0.1", (err) => {});
