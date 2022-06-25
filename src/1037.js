const rl = require("readline").createInterface(process.stdin, process.stdout);
let count = 0;
rl.on("line", line => {
  if (count++ == 0) return;
  const numbers = line.split(/\s/g).sort((a, b) => +a - +b);
  const min = +numbers.shift();
  const max = +numbers.pop() || min;
  console.log(min * max);
  rl.close();
});