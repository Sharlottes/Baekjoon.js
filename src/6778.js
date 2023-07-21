const rl = require("readline").createInterface(process.stdin, process.stdout);
const lines = [];
rl.on("line", (line) => {
  lines.push(+line);
  if (lines.length < 2) return;
  const [ant, eyes] = lines;
  if (ant >= 3 && eyes <= 4) console.log("TroyMartian");
  if (ant <= 6 && eyes >= 2) console.log("VladSaturnian");
  if (ant <= 2 && eyes <= 3) console.log("GraemeMercurian");
});
