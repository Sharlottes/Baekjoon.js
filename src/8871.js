const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", (line) => {
  console.log((1 + +line) * 2, (1 + +line) * 3);
  rl.close();
});
