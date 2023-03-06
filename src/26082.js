const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", (line) => {
  const [A, B, C] = line.split(/\s/).map(Number);
  console.log((B / A) * 3 * C);
  rl.close();
});
