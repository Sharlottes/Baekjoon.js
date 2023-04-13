const rl = require("readline").createInterface(process.stdin, process.stdout);
let N,
  M,
  lc = 0,
  res = [];
rl.on("line", (line) => {
  if (lc == 0) [N, M] = line.split(/\s/).map(Number);
  else {
    res[lc - 1] = line.split("").reverse().join("");

    if (lc == N) {
      console.log(res.join("\n"));
      rl.close();
    }
  }
  lc++;
});
