const rl = require("readline").createInterface(process.stdin, process.stdout);
let lc = 0,
  currenttime;
rl.on("line", (line) => {
  lc++;
  if (lc == 1) {
    const [h, m, s] = line.split(/\s/).map(Number);
    currenttime = h * 60 * 60 + m * 60 + s;
  } else if (lc == 2) {
    const totalsec = currenttime + +line;
    const h = Math.floor((totalsec / 60 / 60) % 24);
    const m = Math.floor((totalsec / 60) % 60);
    const s = Math.floor(totalsec % 60);
    console.log(`${h} ${m} ${s}`);
    rl.close();
  }
});
