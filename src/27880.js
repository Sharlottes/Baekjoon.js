const rl = require("readline").createInterface(process.stdin, process.stdout);
let lc = 0,
  n = 0;
rl.on("line", (line) => {
  lc++;
  const [type, amount] = line.split(/\s/);
  n += (type == "Es" ? 21 : 17) * +amount;

  if (lc == 4) {
    console.log(n);
    rl.close();
  }
});
