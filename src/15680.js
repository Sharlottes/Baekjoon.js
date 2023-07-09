const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", (line) => {
  console.log(+line === 0 ? "YONSEI" : "Leading the Way to the Future");
  rl.close();
});
