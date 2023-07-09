const rl = require("readline").createInterface(process.stdin, process.stdout);
let lineCount = 0, a = 0, b = 0;
rl.on("line", (line) => {
  lineCount++;
  switch(lineCount) {
    case 1: 
      break;
    case 2:
      a = BigInt(line);
      break;
    case 3:
      b = BigInt(line);
      console.log((a * b).toString())
      rl.close();
      break;
  }
});
