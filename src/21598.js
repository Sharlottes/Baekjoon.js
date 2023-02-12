const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", (line) => {
  for(let i = 0; i < +line; i++) console.log("SciComLove")
  rl.close();
});
