const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  let number = 0;
  for (var i = 1; i <= parseInt(line); i++) {
    number += i;
  }
  console.log(number);
  rl.close();
});
