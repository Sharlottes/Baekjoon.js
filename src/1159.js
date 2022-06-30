const rl = require("readline").createInterface(process.stdin, process.stdout);
let maxLine = 0;
let lineCount = 0;
let stacks = {};

rl.on("line", line => {
  if (lineCount == 0) maxLine = +line;
  else {
    if (!stacks[line[0]]) stacks[line[0]] = 0;
    stacks[line[0]]++;
    if (maxLine == lineCount) {
      let res = [];
      for ([key, value] of Object.entries(stacks)) {
        if (value >= 5) res.push(key);
      }
      console.log(res.length > 0 ? res.sort((a, b) => a.charCodeAt() - b.charCodeAt()).join('') : "PREDAJA");
      rl.close();
    }
  }
  lineCount++;
});