const rl = require("readline").createInterface(process.stdin, process.stdout);
let ml, lc;
rl.on("line", (line) => {
  if (!ml) ml = +line;
  else {
    lc++;

    const [x1, y1, x2, y2] = line.split(/\s/).map(BigInt);
    console.log(
      x1 * y1 > x2 * y2
        ? "TelecomParisTech"
        : x1 * y1 < x2 * y2
        ? "Eurecom"
        : "Tie"
    );

    if (lc == ml) rl.close();
  }
});
