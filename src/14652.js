const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", (line) => {
  const [, x, k] = line.split(/\s/).map(Number);
  console.log(~~(k / x), k % x);
  rl.close();
});
