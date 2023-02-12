const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", (line) => {
  const [UR, TR, UO, TO] = line.split(/\s/).map(Number);
  console.log(56 * UR + 24 * TR + 14 * UO + 6 * TO);
  rl.close();
});
