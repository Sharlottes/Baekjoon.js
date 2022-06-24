const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lineCount = 0;
let hour = 0;
let min = 0; //min

rl.on("line", function (line) {
  lineCount++;
  switch(lineCount) {
    case 1: {
      const str = line.split(/\s/g);
      hour = parseInt(str[0]);
      min = parseInt(str[1]);
      break;
    }
    case 2: {
      min += parseInt(line);
      while(min >= 60) {
        min -= 60;
        hour++;
        if(hour >= 24) {
          hour = 0;
        }
      }
      console.log("%d %d", hour, min);
      rl.close();
      break;
    }
  }
});