const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", (line) => {
  const N = +line;
  if (N == -1) {
    rl.close();
    return;
  }
  console.log(`Objects weighing ${N.toFixed(2)} on Earth will weigh ${(N * 0.167).toFixed(2)} on the moon.`);
});
