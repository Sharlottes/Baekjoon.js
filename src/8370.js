const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", (line) => {
  const [n1, k1, n2, k2] = line.split(/\s/).map(Number);
  console.log(n1 * k1 + n2 * k2);
  rl.close();
});
