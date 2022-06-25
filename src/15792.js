const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", line => {
  let [a, b] = line.split(/\s/).map(Number);
  console.log(func(a, b, '0.', 0));
  rl.close();
});

function func(a, b, res, stack) {
  if(stack >= 10) return res;
  while(a < b) a *= 10;
  let i = 0;
  while(true) {
    if(b <= a * i) break;
    i++;
  }
  return func(a - i * b, b, res + i * b + "", stack + 1);
}