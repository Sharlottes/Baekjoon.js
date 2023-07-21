const rl = require("readline").createInterface(process.stdin, process.stdout);
const lines = [];
rl.on("line", (line) => {
  lines.push(+line);
  if (lines.length < 2) return;
  const over = lines[1] - lines[0];
  if (over < 1) console.log("Congratulations, you are within the speed limit!");
  else if (over <= 20) console.log("You are speeding and your fine is $100.");
  else if (over <= 30) console.log("You are speeding and your fine is $270.");
  else console.log("You are speeding and your fine is $500.");
});
