const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", (line) => {
  [K, D, A] = line.split("/").map(Number);
  if (K + A < D || D == 0) console.log("hasu");
  else console.log("gosu");
  rl.close();
});
