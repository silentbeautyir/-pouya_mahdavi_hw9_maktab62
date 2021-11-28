const fs = require("fs");
let datatext;
try {
  datatext = fs.readFileSync("./from.txt", "utf-8");
} catch (err) {
  console.log(err);
}
try {
  fs.writeFileSync("./to.txt", datatext);
} catch (err) {
  console.log(err);
}
