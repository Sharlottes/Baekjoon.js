const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", (line) => {
  const [a, b] = line.split(/\s/).map(Number);
  console.log(a - (a * b) / 100 >= 100 ? 0 : 1);

  rl.close();
});
