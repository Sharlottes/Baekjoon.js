const rl = require("readline").createInterface(process.stdin, process.stdout);
const nums = [];
rl.on("line", (line) => {
  nums.push(+line);

  if (nums.length == 5) {
    const [HB, MB, LB, CD, SD] = nums;

    console.log(Math.min(HB, MB, LB) + Math.min(CD, SD) - 50);
  }
});
