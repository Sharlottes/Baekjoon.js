const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", (line) => {
  const [R1, S] = line.split(" ").map(Number);
  console.log(S * 2 - R1);
  rl.close();
});
