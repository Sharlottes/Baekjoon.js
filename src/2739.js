const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  let number = parseInt(line);
  for (var i = 1; i <= 9; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
  }
  rl.close();
});
