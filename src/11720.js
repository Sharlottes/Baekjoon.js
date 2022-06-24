let currentLine = 0;
let numbers = 0;
const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", line => {
  currentLine++;
  if(currentLine == 1) {
    numbers = parseInt(line);
  }
  else if(currentLine == 2) {
    let number = 0;
    for(let i = 0; i < numbers; i++) {
      number += +line.charAt(i);
    }
    console.log(number);
    rl.close();
  }
});