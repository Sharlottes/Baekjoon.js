const rl = require("readline").createInterface(process.stdin, process.stdout);

let lineCount = 0;
let maxLine = 0;
rl.on("line", line => {
  if(lineCount == 0) {
    maxLine = +line;
  } else if(lineCount <= maxLine) { 
    const [repeat, str] = line.split(/\s/g);
    let newStr = '';
    for(let i = 0; i < str.length; i++) {
      newStr += str.charAt(i).repeat(repeat);
    }
    console.log(newStr);
    if(lineCount == maxLine) rl.close();
  }

  lineCount++;
});