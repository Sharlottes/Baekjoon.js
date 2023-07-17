const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", (line) => {
  const N = +line;
  let res = "";
  for (let i = 1; i <= N; i++) {
    res += i;
    if (i == N || i % 6 == 0) res += " Go!";
    if (i != N) res += " ";
  }
  console.log(res);
  rl.close();
});
