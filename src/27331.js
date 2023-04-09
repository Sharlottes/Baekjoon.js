const rl = require("readline").createInterface(process.stdin, process.stdout);
let lc = 0,
  a,
  b;
rl.on("line", (line) => {
  lc++;
  if (lc == 1) a = line;
  else {
    b = line;
    console.log(a + b);
    rl.close();
  }
});
