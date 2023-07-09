const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", (line) => {
  const [a, b] = line.split(/\s/).map(BigInt);
  console.log((a * b).toString());
  rl.close();
});
