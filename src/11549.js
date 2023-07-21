const rl = require("readline").createInterface(process.stdin, process.stdout);
let answer = -1;
rl.on("line", (line) => {
  if (answer == -1) answer = +line;
  else {
    console.log(line.split(/\s/).filter((n) => +n == answer).length);
  }
});
