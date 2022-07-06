const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const reqObj = url.parse(req.url, true);

  const actualURL = reqObj.pathname;
  const reqData = reqObj.query;

  if (actualURL === "/hello" && req.method === "DELETE") {
    return res.end("creating user successful!");
  }

  if (actualURL === "/getUserDetails" && req.method === "GET") {
    // Getting user from Database:
    const user = {
      name: reqData.name,
      job: reqData.job,
      status: reqData.status,
    };

    const userJSON = JSON.stringify(user);

    res.writeHead(200, {
      "Content-Type": "Application/json",
      "sample-header": "tatata",
    });

    return res.end(userJSON);
  }

  if (actualURL === "/getUserDetails" && req.method === "POST") {
    res.writeHead(200, {
      "Content-type": "Application/json",
    });

    return res.end("<h1>Heading</h1><p>this is a paragraph</p>");
  }

  res.writeHead(404);
  return res.end("not found!");
});

server.listen(3000, "127.0.0.1", (err) => {});
