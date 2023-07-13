const rl = require("readline").createInterface(process.stdin, process.stdout);
let lc = 0,
  NS = [],
  MS = [];
rl.on("line", (line) => {
  lc++;
  if (lc == 2) NS = line.split(/\s/).sort((a, b) => +a - +b);
  if (lc == 4) MS = line.split(/\s/).map(Number);
  if (lc != 4) return;
  const res = [];
  console.log(NS.join(" "));
  for (const M of MS) {
    res.push(isContainM(NS, M, 1, 0) ? 1 : 0);
  }
  console.log(res.join(" "));

  rl.close();
});

function isContainM(NS, M, step, from) {
  if (step > 1 + Math.log2(NS.length)) return false;
  const index = Math.round((NS.length + from) / (2 * step)) - 1;
  const value = +NS[index];
  console.log(`${step}th. NS[${index}] = ${value} != ${M}`);

  if (value == M) return true;
  else if (value > M) return isContainM(NS, M, step + 1, from);
  else return isContainM(NS, M, step + 1, index);
}
