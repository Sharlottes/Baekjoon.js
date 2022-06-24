const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", line => {
  let [a, b] = line.split(/\s/).map(BigInt); 
  console.log(BigInt(a + b).toString());
  rl.close();
});