const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", (line) => {
  let res = 1;
  for (let i = 1; i <= +line; i++) res *= i;
  console.log(res);
  rl.close();
});
