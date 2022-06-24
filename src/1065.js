const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  let count = 0;
  for (var i = 1; i <= parseInt(line); i++) {
    let hundredNumber = Math.floor((i % 1000) / 100);
    let tenNumber = Math.floor((i % 100) / 10);
    let oneNumber = i % 10;

    if (100 <= i && i < 1000) {
      if (hundredNumber - tenNumber === tenNumber - oneNumber) {
        count++;
      }
    } else if(i<100) count++;
  }
  console.log(count);
  rl.close();
});
