const rl = require("readline").createInterface(process.stdin, process.stdout);
let a = -1;
rl.on("line", (line) => {
  if (a == -1) {
    a = +line;
    return;
  }

  const [H, W, N] = line.split(/\s/).map(Number);

  console.log(
    (N % H || H).toString() +
      Math.ceil(N / H)
        .toString()
        .padStart(2, "0")
  );
});
