const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", (line) => {
  for (let i = 0; i < line.length / 2; i++) {
    if (line[i] != line[line.length - 1 - i]) {
      console.log(0);
      return;
    }
  }
  console.log(1);
  rl.close();
});
