const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", (line) => {
  const days = +line;
  console.log("V".repeat(~~ (days / 5)) + "I".repeat(days % 5))
  rl.close();
});
