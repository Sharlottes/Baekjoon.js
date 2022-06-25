const rl = require("readline").createInterface(process.stdin, process.stdout);
let maxLine;
let current;
let currentLine = 0;

rl.on("line", line => {
  if (currentLine == 0) maxLine = +line;
  else {
    if (current) current = checkDiff(current, line);
    else current = line;
    if (currentLine == maxLine) {
      console.log(current);
      rl.close();
    }
  }
  currentLine++;
});

function checkDiff(str1, str2) {
  let result = '';
  for (let i = 0, m = str1.length; i < m; i++) {
    const char1 = str1.charAt(i);
    const char2 = str2.charAt(i);
    if (char1 !== char2) result += '?';
    else result += char1;
  }
  return result;
}