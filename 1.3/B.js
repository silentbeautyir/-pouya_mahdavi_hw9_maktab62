const fs = require("fs");
try {
  fs.writeFileSync("./newFile.txt", "Hello City");
} catch (err) {
  console.log(err);
}
const file = "./newFile.txt";
if (fs.existsSync(file)) {
  console.log(file, "exists");
} else {
  console.log(file, "Not exists");
}
