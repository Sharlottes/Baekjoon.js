const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", (line) => {
  const [ApB, AmB] = line.split(/\s/).map(Number);
  const A = (ApB + AmB) / 2;
  const B = ApB - A;
  if (A == 0 && B == 0) console.log("0 0");
  else if ((ApB + AmB) % 2 != 0 || A < 0 || B < 0 || A == B) console.log(-1);
  else if (A > B) console.log(`${A} ${B}`);
  else console.log(`${B} ${A}`);

  rl.close();
});
