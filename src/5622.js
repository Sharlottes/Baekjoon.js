const rl = require("readline").createInterface(process.stdin, process.stdout);
const arr = ["ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"];

rl.on("line", line => {
  let time = 0;
  line.split("").forEach(char => {
    time += arr.findIndex(s=>s.includes(char))+3;
  });

  console.log(time);
  rl.close();
});