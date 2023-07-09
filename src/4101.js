const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", line => {
  const [a, b] = line.split(" ").map(BigInt);
  if(a == 0 && b == 0) rl.close();
  else console.log(a > b ? "Yes" : "No");
});