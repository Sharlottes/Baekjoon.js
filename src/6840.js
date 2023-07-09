const rl = require("readline").createInterface(process.stdin, process.stdout);
const nums = [];
let lc = 0;
rl.on("line", (line) => {
  lc++;
  nums.push(+line);
  if (lc == 3) {
    cal();
    rl.close();
  }
});

function cal() {
  nums.sort((a, b) => a - b);
  console.log(nums[1]);
}
