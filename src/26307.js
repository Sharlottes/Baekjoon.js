const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", (line) => {
  const [H, M] = line.split(/\s/).map(Number);
  console.log((H - 9) * 60 + M);

  rl.close();
});
