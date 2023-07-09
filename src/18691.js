const rl = require("readline").createInterface(process.stdin, process.stdout);
let lineCount = 0,
  maxLine;
rl.on("line", (line) => {
  if (!maxLine) maxLine = +line;
  else {
    lineCount++;
    const [G, C, E] = line.split(/\s/).map(Number);
    if (C >= E) console.log(0);
    else console.log((E - C) * (G == 3 ? 5 : G == 2 ? 3 : 1));

    if (lineCount == maxLine) rl.close();
  }
});
