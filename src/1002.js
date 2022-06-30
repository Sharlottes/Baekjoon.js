const rl = require("readline").createInterface(process.stdin, process.stdout);
let maxLine = 0;
let lineCount = 0;
rl.on("line", line => {
  if (lineCount == 0) maxLine = +line;
  else {
    let [x1, y1, r1, x2, y2, r2] = line.split(/\s/g).map(Number);
    const d = Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2);
    if (r1 > r2) {
      const tmp = r1;
      r1 = r2;
      r2 = tmp;
    }

    const add = Math.pow(r1 + r2, 2);
    const sub = Math.pow(r1 - r2, 2);
    if (sub < d && d < add) console.log(2);
    else if (add == d || (sub == d && d != 0)) console.log(1);
    else if (add < d || d < sub) console.log(0);
    else if (d == 0) {
      if (r1 == r2) console.log(-1);
      else console.log(0);
    }
    if (maxLine == lineCount) {
      rl.close();
    }
  }
  lineCount++;
});