const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", line => {
  const [x, y, w, h] = line.split(/\s/g).map(Number);
  console.log(Math.min(x, y, w - x, h - y));
  rl.close();
});