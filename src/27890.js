const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", (line) => {
  let [x, N] = line.split(/\s/).map(Number);

  for (let i = 0; i < N; i++) {
    if (x % 2 == 0) x = (x / 2) ^ 6;
    else x = (x * 2) ^ 6;
  }

  console.log(x);

  rl.close();
});
