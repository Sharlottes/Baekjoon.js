const rl = require("readline").createInterface(process.stdin, process.stdout);
let i = 0;
rl.on("line", (line) => {
  if(+line == 0) rl.close();
  else console.log("Case "+(++i)+": Sorting... done!")
});
