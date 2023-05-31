const rl = require("readline").createInterface(process.stdin, process.stdout);
let ml,
  i = 1;
rl.on("line", (line) => {
  if (!ml) ml = +line;
  else {
    console.log(`${i++}. ${line}`);
    rl.close();
  }
});
