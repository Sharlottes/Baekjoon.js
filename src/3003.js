const rl = require("readline").createInterface(process.stdin, process.stdout);
const origin = [1, 1, 2, 2, 2, 8];
rl.on("line", line => {
  console.log(line.split(" ").map((n, i) => origin[i] - +n).join(" "));
  rl.close();
});