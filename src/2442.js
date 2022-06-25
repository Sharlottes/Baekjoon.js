const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", line => {
  for(let i = 1, stack = 1, m = parseInt(line); stack <= m; i += 2, stack++) {
    console.log(" ".repeat(m-stack) + "*".repeat(i));
  }
  rl.close();
});