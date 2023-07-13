const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", (line) => {
  for (let i = 0; i < line.length / 10; i++) {
    console.log(line.slice(10 * i, Math.min(line.length, 10 * (i + 1))));
  }

  rl.close();
});
