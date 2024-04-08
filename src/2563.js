//@ts-check
const rl = require("readline").createInterface(process.stdin, process.stdout);

let lineCount = 0;
let maxLine = 0;
let totalSize = 0;
const list = [];
rl.on("line", (line) => {
  if (!maxLine) {
    maxLine = +line;
    return;
  }
  lineCount++;

  const [fromX, fromY] = line.split(" ").map(Number);
  const toX = fromX + 10;
  const toY = fromY + 10;

  totalSize += 100;
  console.log(totalSize);
  for (const e of list) {
    const w = 10 - Math.abs(e.fromX - fromX);
    const h = 10 - Math.abs(e.fromY - fromY);
    if (w > 0 && h > 0) {
      totalSize -= w * h;
    }
  }

  list.push({
    fromX,
    fromY,
    toX,
    toY,
  });
  if (lineCount == maxLine) {
    console.log(totalSize);
  }
});
