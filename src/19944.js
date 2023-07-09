const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", (line) => {
  const [N, M] = line.split(" ").map(Number);
  if (M <= 2) console.log("NEWBIE!");
  else if (M <= N) console.log("OLDBIE!");
  else console.log("TLE!");
  rl.close();
});
