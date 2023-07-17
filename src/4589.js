const rl = require("readline").createInterface(process.stdin, process.stdout);
let ml, cl;
rl.on("line", (line) => {
  if (!ml) {
    ml = +line;
    console.log("Gnomes:");
  } else {
    cl++;
    const [A, B, C] = line.split(/\s/).map(Number);
    if ((A > B && B > C) || (A < B && B < C)) console.log("Ordered");
    else console.log("Unordered");
    if (cl >= ml) rl.close();
  }
});
