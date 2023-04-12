const rl = require("readline").createInterface(process.stdin, process.stdout);
/** @type Set<string> */
const words = new Set();
let lineCount = 0,
  maxLine;

rl.on("line", (line) => {
  if (!maxLine) maxLine = +line;
  else {
    lineCount++;
    words.add(line);
    if (lineCount == maxLine) {
      const arr = Array.from(words);
      arr.sort((a, b) => {
        if (a.length != b.length) return a.length < b.length ? -1 : 1;
        else return compareWord(a, b);
      });
      console.log(arr.join("\n"));
      rl.close();
    }
  }
});

function compareWord(a, b) {
  for (let i = 0; i < a.length; i++) {
    const aCharCode = a.charCodeAt(i);
    const bCharCode = b.charCodeAt(i);
    if (aCharCode < bCharCode) return -1;
    else if (aCharCode > bCharCode) return 1;
  }
}
