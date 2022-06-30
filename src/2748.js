const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", line => {
  console.log(fibonacci(+line).toString());
  rl.close();
});

function fibonacci(n) {
  const nums = [0, 1];
  for (let i = 2; i <= n; i++) {
    nums.push(BigInt(nums[i - 1]) + BigInt(nums[i - 2]));
  }
  return nums.pop();
}
