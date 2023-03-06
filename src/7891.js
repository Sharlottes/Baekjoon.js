const rl = require("readline").createInterface(process.stdin, process.stdout);
let lc, ml;

rl.on("line", (line) => {
  if(!ml) ml = +line;
  else {
    lc++;

    const [a, b] = line.split(/\s/).map(BigInt);
    console.log((a + b).toString());

    if(ml == lc) {
      rl.close();
    }
  }
});
