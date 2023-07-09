const rl = require("readline").createInterface(process.stdin, process.stdout);
let lc = 0,
  res = 0n;
rl.on("line", (line) => {
  lc++;
  res += BigInt(line);
  if (lc == 2) {
    console.log(res.toString());
    rl.close();
  }
});
