const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", line => {
  const [a, b] = line.split(" ");
  console.log(+b - +a, b);
  rl.close();
});