const rl = require("readline").createInterface(process.stdin, process.stdout);
let lc = 0,
  total,
  diff;
rl.on("line", (line) => {
  lc++;
  if (lc == 1) total = BigInt(line);
  if (lc == 2) {
    diff = BigInt(line);
    cal();
    rl.close();
  }
});

function cal() {
  const a = (total + diff) >> 1n;
  console.log(a.toString());
  console.log((a - diff).toString());
}
