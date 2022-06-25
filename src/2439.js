const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let result = "";
rl.on("line", function (line) {
  for(let i = 1, max = parseInt(line); i <= max; i++)
    result += " ".repeat(max - i) + "*".repeat(i) + "\n";
  rl.close();
}).on("close", () => {
  console.log(result);
  process.exit();
});
