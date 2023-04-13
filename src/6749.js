const rl = require("readline").createInterface(process.stdin, process.stdout);
let y,
  lc = 0;
rl.on("line", (line) => {
  lc++;
  if (lc == 1) y = +line;
  else {
    console.log(+line + +line - y);
    rl.close();
  }
});
