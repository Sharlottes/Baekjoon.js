const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", (line) => {
  const [T, S] = line.split(" ").map(Number);
  const sul = Boolean(S);
  const jumsim = T >= 12 && T <= 16;
  if (jumsim && !sul) console.log(320);
  else console.log(280);
  rl.close();
});
