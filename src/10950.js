const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0,
  max = 0;
rl.on("line", function (line) {
  if (count == 0) max = parseInt(line);
  else {
    let [a, b] = line.split(/\s/g).map((e) => parseInt(e));
    console.log(`${a + b}`);
    if (count == max) rl.close();
  }
  count++;
});
