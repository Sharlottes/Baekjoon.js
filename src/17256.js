const rl = require("readline").createInterface(process.stdin, process.stdout);
let a = [],
  c = [],
  lc = 0;
rl.on("line", (line) => {
  lc++;
  if (lc == 1) {
    a = line.split(/\s/).map(Number);
  }
  if (lc == 2) {
    c = line.split(/\s/).map(Number);

    console.log(-a[2] + c[0], (1 / a[1]) * c[1], -a[0] + c[2]);

    rl.close();
  }
});
