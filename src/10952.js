const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0,
  number = 0;
let result = "";
rl.on("line", function (line) {
  let [a, b] = line.split(/\s/g).map((e) => parseInt(e));
  if (a == 0 && b == 0) rl.close();
  else result += `${a + b}\n`;
}).on("close", () => {
  console.log(result);
  process.exit();
});
