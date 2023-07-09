const rl = require("readline").createInterface(process.stdin, process.stdout);
let lc = 0, total = 0;
rl.on("line", line => {
  lc++;
  total += +line;

  if(lc == 5) {
    console.log(total);
    rl.close();
  }
});