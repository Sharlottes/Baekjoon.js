const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", (line) => {
  console.log(Math.pow(+line, 3));
  rl.close();
});
