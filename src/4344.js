const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let count = 0,
  max = 0;
let result = "";
rl.on("line", function (line) {
  if (count++ == 0) max = parseInt(line);
  else {
    let grades = line.split(/\s/).slice(1).map(Number);
    let average = 0;
    grades.forEach((e) => (average += e));
    average /= grades.length;
    let ratio =
      (grades.filter((e) => e > average).length / grades.length) * 100;
    result += ratio.toFixed(3) + "%\n";
    if (count == max + 1) rl.close();
  }
}).on("close", () => {
  console.log(result);
  process.exit();
});
