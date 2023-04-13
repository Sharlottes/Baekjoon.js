const rl = require("readline").createInterface(process.stdin, process.stdout);
let lineCount = 0,
  maxLine;
rl.on("line", (line) => {
  if (!maxLine) maxLine = +line;
  else {
    lineCount++;
    const [P, T] = line.split(/\s/).map(Number);
    console.log(P - Math.floor(T / 7) + Math.floor(T / 4));
    if (lineCount == maxLine) rl.close();
  }
});
