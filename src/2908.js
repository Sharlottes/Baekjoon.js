const rl = require("readline").createInterface(process.stdin, process.stdout);

rl.on("line", line => {
  const [num1, num2] = line.split(/\s/g).map(s=>Number(s.split("").reverse().join("")));

  console.log(Math.max(num1, num2));
  rl.close();
});