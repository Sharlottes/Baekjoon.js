const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0,
  number = 1;
rl.on("line", function (line) {
  number *= parseInt(line);
  if (++count == 3) {
    let res = "";
    for (var i = 0; i < 10; i++)
      res += (number + "").split("").filter((e) => e == i).length + "\n";
    console.log(res);
    rl.close();
  }
});
