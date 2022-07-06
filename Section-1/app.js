const fs = require("fs");

const readData = fs.readFileSync("./plainText.txt", "utf-8");
const writeData = fs.writeFileSync(
  "./plainText.txt",
  "This is new text from me!",
  "utf-8",
  (err) => {
    if (err) return console.log(err);
    console.log("file has been written");
  }
);
console.log(writeData);
console.log("running");
