const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
let x = 0;

rl.on("line", function (line) {
  if (count++ == 0) {
    x = parseInt(line);
  } else {
    let y = parseInt(line);

    console.log(x > 0 ? (y > 0 ? 1 : 4) : y > 0 ? 2 : 3);
    rl.close();
  }
});
