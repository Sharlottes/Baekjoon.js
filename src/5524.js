const rl = require("readline").createInterface(process.stdin, process.stdout);
let a = -1;
rl.on("line", (line) => {
  if (a == -1) {
    a = +line;
    return;
  }

  console.log(line.toLowerCase());
});
