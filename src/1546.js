const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let count = 0;
rl.on("line", function (line) {
  if (++count == 2) {
    let numbers = line.split(/\s/).map(Number);
    let maxNumber = numbers[0];
    for (var i = 0; i < numbers.length; i++)
      maxNumber = numbers[i] > maxNumber ? numbers[i] : maxNumber;
    let result = 0;
    numbers.forEach((e) => (result += (e / maxNumber) * 100));
    result /= numbers.length;
    console.log(result);
    rl.close();
  }
});
