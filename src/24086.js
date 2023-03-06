const rl = require("readline").createInterface(process.stdin, process.stdout);
let lc = 0, a, b;
rl.on("line", (line) => {
  lc++;
  switch(lc) {
    case 1:
      a = +line;
      break;
    case 2:
      b = +line;
      console.log(b - a);
      rl.close();
      break;
  }
});
