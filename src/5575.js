const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", (line) => {
  const [SH, SM, SS, EH, EM, ES] = line.split(/\s/).map(Number);
  const startDate = SS + SM * 60 + SH * 60 * 60;
  const endDate = ES + EM * 60 + EH * 60 * 60;
  const totalDate = endDate - startDate;

  console.log(`${~~(totalDate / 60 / 60) % 60} ${~~(totalDate / 60) % 60} ${totalDate % 60}`);
});
