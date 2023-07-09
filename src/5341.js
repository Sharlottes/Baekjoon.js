const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", (line) => {
  const num = +line;
  if (num == 0) rl.close();
  else console.log((num * (num + 1)) / 2);
});
