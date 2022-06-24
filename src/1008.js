const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  let [a, b] = line.split(/\s/g).map((e) => parseInt(e));
  console.log(a / b);
  rl.close();
});
