const rl = require("readline").createInterface(process.stdin, process.stdout);
let lineCount = 0;
let maxLine;
let groupCount = 0;

rl.on("line", line => {
  const isEnd = {};
  let lastChar;

  if(lineCount == 0) maxLine = +line;
  else if(lineCount <= maxLine) {
    let isGroup = true;
    for(let i = 0; i < line.length; i++) {
      const char = line.charAt(i);
      if(lastChar != char) {
        if(isEnd[char]) {
          isGroup = false;
          break;
        }
        isEnd[char] = true;
      }
      lastChar = char;
    }
    if(isGroup) groupCount++;
    if(lineCount == maxLine) {
      console.log(groupCount);
      rl.close();
    }
  }
  lineCount++;
});