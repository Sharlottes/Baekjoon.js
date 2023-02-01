const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", (line) => {
  console.log((BigInt(line) % 20000303n).toString());
  rl.close();
});
