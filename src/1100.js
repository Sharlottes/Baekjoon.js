const rl = require("readline").createInterface(process.stdin, process.stdout);
let white = false;
let count = 0;
let total = 0;
rl.on("line", line => {
  white = !white;
  for (let i = 0; i < line.length; i++) {
    if (white && line[i] == 'F') total++;
    white = !white;
  }
  count++;
  if (count == 8) {
    console.log(total);
    rl.close();
  }
});