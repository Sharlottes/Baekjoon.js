const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let result = "";
rl.on("line", function (line) {
  if (!line) rl.close();
  let [a, b] = line.split(/\s/g).map((e) => parseInt(e));
  result += `${a + b}\n`;
}).on("close", () => {
  console.log(result);
  process.exit();
});
