const rl = require("readline").createInterface(process.stdin, process.stdout);
let a = -1;
rl.on("line", (line) => {
  if (a == -1) {
    a = +line;
    return;
  }

  let res = "",
    cur = "";
  for (let char of line) {
    if (cur == char) continue;
    cur = char;
    res += cur;
  }

  console.log(res);
});
