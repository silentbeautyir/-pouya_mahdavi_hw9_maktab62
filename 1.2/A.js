const fs = require("fs");
fs.readFile("./from.txt", "utf-8", (err, data) => {
  if (err) console.log(err);
  else {
    fs.writeFile("./to.txt", data, (err) => {
      if (err) console.log(err);
    });
  }
});
