const rl = require("readline").createInterface(process.stdin, process.stdout);
let maxLine = 0;
let lineCount = 0;
rl.on("line", line => {
  if (lineCount == 0) maxLine = +line;
  else {
    const n = +line;
    switch (n) {
      case 0: {
        console.log("1 0");
        break;
      }
      case 1: {
        console.log("0 1");
        break;
      }
      default: {
        console.log("%d %d", fibonacci(n - 3), fibonacci(n - 2));
      }
    }
    if (maxLine == lineCount) {
      rl.close();
    }
  }
  lineCount++;
});

function fibonacci(n) {
  const nums = [0, 1];
  for (let i = 2; i <= n + 2; i++) {
    nums.push(nums[i - 1] + nums[i - 2]);
  }
  return nums.pop();
}