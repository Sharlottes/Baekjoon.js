const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", (line) => {
  if (line == "0") return;
  const N = parseFloat(line);
  let sum = 1;
  for (let i = 1; i <= 4; i++) {
    sum += Math.pow(N, i);
  }
  console.log(sum.toFixed(2));
  rl.close();
});
