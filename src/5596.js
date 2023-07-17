const rl = require("readline").createInterface(process.stdin, process.stdout);
const totals = [];
rl.on("line", (line) => {
  totals.push(
    line
      .split(/\s/)
      .map(Number)
      .reduce((a, e) => a + e, 0)
  );
  if (totals.length == 2) console.log(Math.max(...totals));
});
