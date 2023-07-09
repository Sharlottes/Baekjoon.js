const rl = require("readline").createInterface(process.stdin, process.stdout);

rl.on("line", function (line) {
  let [N, A, B] = line.split(/\s/g).map(Number);
  console.log(A < B ? "Bus" : B < A ? "Subway" : "Anything");
  rl.close();
});
