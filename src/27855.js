const rl = require("readline").createInterface(process.stdin, process.stdout);
let lc = 0,
  p1 = 0,
  p2 = 0;
rl.on("line", (line) => {
  lc++;
  const [a, b] = line.split(" ").map(Number);

  if (lc == 1) {
    p1 = a * 3 + b;
  } else if (lc == 2) {
    p2 = a * 3 + b;
    console.log(
      p1 - p2 > 0 ? `1 ${p1 - p2}` : p2 - p1 > 0 ? `2 ${p2 - p1}` : "NO SCORE"
    );
    rl.close();
  }
});
