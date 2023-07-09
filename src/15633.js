const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", (line) => {
  const n = +line;
  let total = 0;
  for (let i = 0; i <= n; i++) {
    if (n % i == 0) total += i;
  }

  console.log(total * 5 - 24);
  rl.close();
});
