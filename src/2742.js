const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let result = "";
rl.on("line", function (line) {
  for (var i = 0, max = parseInt(line); i < max; i++) result += `${max - i}\n`;
  rl.close();
}).on("close", () => {
  console.log(result);
  process.exit();
});
