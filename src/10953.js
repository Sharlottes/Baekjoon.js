const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numbers = [];
let count = 0,
  max = 0;
rl.on("line", function (line) {
  if (count++ == 0) max = parseInt(line);
  else {
    numbers.push(
      line
        .split(",")
        .map(Number)
        .reduce((a, e) => a + e)
    );
    if (count > max) rl.close();
  }
}).on("close", () => {
  console.log(numbers.join("\n"));
  process.exit();
});
