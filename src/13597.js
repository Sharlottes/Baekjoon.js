const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", (line) => {
  console.log(Math.max(...line.split(/\s/).map(Number)));
});
