const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
let number = 0;
rl.on("line", function (line) {
  if (count++ == 0) {
    number = parseInt(line);
  } else {
    let number2 = parseInt(line);
    let result = line
      .split("")
      .map((num) => number * parseInt(num))
      .reverse()
      .join("\n");
    console.log(`${result}\n${number * number2}`);
    rl.close();
  }
});
