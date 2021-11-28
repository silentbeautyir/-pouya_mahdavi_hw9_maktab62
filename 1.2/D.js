const fs = require("fs");
let resdata;
try {
  resdata = fs.readFileSync("./from.txt", "utf-8");
} catch (err) {
  console.log(err);
}
try {
  resdata += "    " + fs.readFileSync("./append.txt", "utf-8");
} catch (err) {
  console.log(err);
}
try {
  fs.writeFileSync("./to.txt", resdata);
} catch (err) {
  console.log(err);
}
