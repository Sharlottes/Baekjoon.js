const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", (line) => {
  const [N, M] = line.split(" ").map(Number);

  console.log(N * 100 >= M ? "Yes" : "No")
  rl.close();
});
