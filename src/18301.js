const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", (line) => {
  const [n1, n2, n12] = line.split(/\s/).map(Number);
  console.log(~~(((n1 + 1) * (n2 + 1)) / (n12 + 1)) - 1);
  rl.close();
});
