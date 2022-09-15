const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", line => {
  const [a, b] = line.split(" ").map(Number);
  console.log((a+b)*(a-b));
  rl.close();
});