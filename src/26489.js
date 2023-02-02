const rl = require("readline").createInterface(process.stdin, process.stdout);
let lc = 0;
rl.on("line", () => {
  lc++;
}).on("close", () => {
  console.log(lc);
});
