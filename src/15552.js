const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0,
  max = 0;
let result = "";
rl.on("line", function (line) {
  if (count == 0) max = parseInt(line);
  else {
    let [a, b] = line.split(/\s/g).map((e) => parseInt(e));
    result += `${a + b}\n`;
    if (count == max) rl.close();
  }
  count++;
}).on("close", () => {
  console.log(result);
  process.exit();
});
