const rl = require("readline").createInterface(process.stdin, process.stdout);

rl.on("line", line => {
  console.log(line.split(" ").filter(e=>e).length);
  rl.close();
});