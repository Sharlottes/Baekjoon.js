const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", line => {
  console.log(+line - 1946);
  rl.close();
});