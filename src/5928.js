const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", (line) => {
  const [D, H, M] = line.split(/\s/).map(Number);
  const totalMin = D * 60 * 24 + H * 60 + M;
  const lastMin = totalMin - (11 * 60 * 24 + 11 * 60 + 11);
  console.log(Math.max(-1, lastMin));
});
