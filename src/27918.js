const rl = require("readline").createInterface(process.stdin, process.stdout);
let lineCount = 0,
  maxLine,
  D = 0,
  P = 0;
rl.on("line", (line) => {
  if (!maxLine) maxLine = +line;
  else {
    lineCount++;
    if (Math.abs(D - P) < 2) {
      if (line == "D") D++;
      if (line == "P") P++;
    }

    if (lineCount == maxLine) {
      console.log(`${D}:${P}`);
      rl.close();
    }
  }
});
