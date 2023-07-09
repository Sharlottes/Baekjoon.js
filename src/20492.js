const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", (line) => {
  const money = +line;
  console.log(money * 0.78, money - money * 0.2 * 0.22);

  rl.close();
});
