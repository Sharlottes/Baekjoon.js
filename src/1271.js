const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", line => {
  const [money, entities] = line.split(" ").map(BigInt);
  console.log((money / entities).toString());
  console.log((money % entities).toString());
  rl.close();
});