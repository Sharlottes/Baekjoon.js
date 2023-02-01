const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", (line) => {
  const num = +line;
  console.log("long ".repeat(~~(num / 4 - 1)) + "long int");
  rl.close();
});
