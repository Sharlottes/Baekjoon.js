const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", (line) => {
  const v = line.split(/\s/).reduce((a, e) => +a + +e, 0);
  if (v == 0) return;
  console.log(v);
});
