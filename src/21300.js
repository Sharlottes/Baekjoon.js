const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", (line) => {
  console.log(line.split(/\s/).reduce((total, num) => total + 5 * +num, 0));

  rl.close();
});
