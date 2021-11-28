const fs = require("fs");
fs.readFile("./from.txt", "utf-8", (err, fromdata) => {
  if (err) {
    console.log(err);
  } else {
    fs.readFile("./append.txt", "utf-8", (err, appenddata) => {
      if (err) {
        console.log(err);
      } else {
        let resdata = fromdata + "   " + appenddata;
        fs.writeFile("./to.txt", resdata, (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log("complete");
          }
        });
      }
    });
  }
});
