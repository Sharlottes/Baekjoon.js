//@ts-check
const rl = require("readline").createInterface(process.stdin, process.stdout);

const pointMap = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
};
let lineCount = 0;
let totalPoint = 0;
let totalAvrPoint = 0;
const maxLine = 20;
rl.on("line", (line) => {
  lineCount++;
  const inputs = line.split(/\s/);
  const point = +inputs[1];
  const grade = inputs[2];
  if (grade != "P") {
    totalPoint += point;
    totalAvrPoint += pointMap[grade] * point;
  }

  if (lineCount == maxLine) {
    console.log((Math.round((totalAvrPoint / totalPoint) * 1_000_000) / 1_000_000).toFixed(6));
  }
});
