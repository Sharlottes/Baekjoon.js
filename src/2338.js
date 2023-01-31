const rl = require("readline").createInterface(process.stdin, process.stdout);
const maxline = 2;
let lineCount = 0;
let a, b;
rl.on("line", (line) => {
  lineCount++;

  if (lineCount == 1) a = BigInt(line);
  if (lineCount == 2) {
    b = BigInt(line);
    cal(a, b);
    rl.close();
  }
});

function cal(a, b) {
  console.log((a + b).toString());
  console.log((a - b).toString());
  console.log((a * b).toString());
}
