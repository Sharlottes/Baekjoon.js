const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];
let count = 0;
rl.on("line", function (line) {
  arr.push(parseInt(line));
  if (++count == 9) {
    let num = arr
      .slice()
      .sort((n1, n2) => (n1 > n2 ? 1 : -1))
      .pop();
    console.log(num + "\n" + (arr.indexOf(num) + 1));
    rl.close();
  }
});
