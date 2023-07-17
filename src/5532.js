const rl = require("readline").createInterface(process.stdin, process.stdout);
const nums = [];
rl.on("line", (line) => {
  nums.push(+line);

  if (nums.length == 5) {
    const [totalDay, totalKorPage, totalMathPage, korPerDay, mathPerDay] = nums;

    console.log(totalDay - Math.max(Math.ceil(totalMathPage / mathPerDay), Math.ceil(totalKorPage / korPerDay)));
  }
});
