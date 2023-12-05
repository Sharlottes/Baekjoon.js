//@ts-check
const rl = require("readline").createInterface(process.stdin, process.stdout);

const star = "*";
const blank = " ";
rl.on("line", (line) => {
  const max = +line;
  for (let i = 1; i <= max - 1; i++) {
    console.log(blank.repeat(max - i) + star.repeat(i * 2 - 1));
  }
  console.log(star.repeat(max * 2 - 1));
  for (let i = max - 1; i > 0; i--) {
    console.log(blank.repeat(max - i) + star.repeat(i * 2 - 1));
  }
});
