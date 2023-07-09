const rl = require("readline").createInterface(process.stdin, process.stdout);
let lc = 0,
  str;
rl.on("line", (line) => {
  lc++;
  if (lc == 1) {
    str = line;
  } else {
    console.log(str[+line - 1]);
    rl.close();
  }
});
