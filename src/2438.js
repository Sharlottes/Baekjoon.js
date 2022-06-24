const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0,
  max = 0;
let result = "";
rl.on("line", function (line) {
  for (var i = 1; i <= parseInt(line); i++) result += "*".repeat(i) + "\n";
  rl.close();
}).on("close", () => {
  console.log(result);
  process.exit();
});
