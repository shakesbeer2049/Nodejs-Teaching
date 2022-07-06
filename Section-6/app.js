const fs = require("fs");

const express = require("express");

const todoListJSON = fs.readFileSync("./data/todoList.json", "utf-8");
const todoListObj = JSON.parse(todoListJSON);

// 1. Make ther server (app)
const app = express();

app.use(express.json());

app.get("/todo", (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "Getting list",
    data: {
      todoList: todoListObj,
    },
  });
});

// FOR EACH FUNCTION:
// const array = [1, 3, 4, 5];

// const multiplied = [];

// array.forEach((cur, index, array) => {
//   multiplied.push(cur * 2);
// });

// console.log(multiplied);

// MAP FUNCTION
// const array = [1, 3, 4, 5];

// const multiplied = array.map((cur, index, array) => {
//   return cur * 2;
// });

// console.log(multiplied);

app.post("/todo", (req, res, next) => {
  const idArray = todoListObj.map((cur) => cur.id);
  const greatestElement = Math.max(...idArray);

  const newId = greatestElement + 1;
  req.body.id = newId;

  todoListObj.push(req.body);
  const todoJSON = JSON.stringify(todoListObj);

  fs.writeFile("./data/todoList.json", todoJSON, (err) => {
    if (err) {
      console.log(err);

      return res.status(400).json({
        status: "fail",
        message: "there was an error writing file",
      });
    }

    res.status(201).json({
      status: "success",
      message: "Created",
    });
  });
});

app.patch("/todo", (req, res, next) => {
  res.status(202).json({
    status: "success",
    message: "Updated",
  });
});

app.delete("/todo", (req, res, next) => {
  res.status(204).json({
    status: "success",
    message: "Deleted",
  });
});

// 2. Start the server
const port = 3000;
app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log(`starting server on port: ${port}`);
});
