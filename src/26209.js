const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", (line) => {
  console.log(/[^0 | 1]/g.test(line) ? "F" : "S");

  rl.close();
});
