const rl = require("readline").createInterface(process.stdin, process.stdout);
let lc = 0,
  sl,
  cc = 0;
rl.on("line", (line) => {
  lc++;
  if (lc == 1) {
    sl = +line;
  } else {
    for (let i = 0; i < sl; i++) {
      if ("aieuo".includes(line[i])) cc++;
    }
    console.log(cc);
    rl.close();
  }
});
