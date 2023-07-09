const rl = require("readline").createInterface(process.stdin, process.stdout);
let lc = 0;
let totalSec = 0;
rl.on("line", (line) => {
  totalSec += +line;
  lc++;
  if (lc == 4) {
    console.log(~~(totalSec / 60));
    console.log(totalSec % 60);
    rl.close();
  }
});
