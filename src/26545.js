const rl = require("readline").createInterface(process.stdin, process.stdout);
let ml = 0,
  lc = 0,
  res = 0;
rl.on("line", (line) => {
  if (!ml) ml += +line;
  else {
    lc++;
    res += +line;
    if (lc == ml) {
      console.log(res);
      rl.close();
    }
  }
});
