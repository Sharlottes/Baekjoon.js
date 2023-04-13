const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", (line) => {
  const N = +line;
  console.log(N * (N - 1));

  rl.close();
});
