const rl = require("readline").createInterface(process.stdin, process.stdout);
let count = 0;
let winners = 0;
rl.on("line", line => {
  if (count++ == 0) {
      winners = +line.split(/\s/g)[1];
      return;
  };
  const numbers = line.split(/\s/g).sort((a, b) => +a - +b);
  console.log(numbers[numbers.length - winners]);
  rl.close();
});
