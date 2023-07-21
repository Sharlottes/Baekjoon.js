const rl = require("readline").createInterface(process.stdin, process.stdout);
let ml;
let l = [];
rl.on("line", (line) => {
  if (!ml) {
    ml = +line;
    return;
  }
  l.push(+line);
  if (l.length < ml) return;
  console.log(l.reduce((a, e) => a + e, 0));
});
