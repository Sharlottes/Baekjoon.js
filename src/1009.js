const rl = require("readline").createInterface(process.stdin, process.stdout);
let maxLine;
let currentLine = 0;

rl.on("line", line => {
  if (currentLine == 0) maxLine = +line;
  else {
    const [a, b] = line.split(/\s/g).map(Number);
    const num = a % 10;
    let result = num;
    for (let i = 0; i < b - 1; i++) {
      result = (result * num) % 10;
    }
    console.log(result || 10);
    if (currentLine == maxLine) rl.close();
  }
  currentLine++;
});