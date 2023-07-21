const rl = require("readline").createInterface(process.stdin, process.stdout);
let l = "9780921418";
rl.on("line", (line) => {
  l += line;
  if (l.length < 13) return;
  let total = 0;

  for (let i = 0; i < l.length; i++) {
    const number = +l[i];
    if (i % 2 == 0) total += number * 1;
    else total += number * 3;
  }
  console.log(`The 1-3-sum is ${total}`);
});
