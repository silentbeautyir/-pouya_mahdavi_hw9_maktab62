const fs = require("fs");
fs.writeFile("./newFile.txt", "Hello World", "utf-8", (err) => {
  if (err) {
    console.log(err);
  }
});
const file = "./newFile.txt";
fs.exists(file, function (exists) {
  if (exists) {
    console.log(file, "exists");
  } else {
    console.log(file, "Not exists");
  }
});
