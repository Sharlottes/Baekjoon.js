const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", line => {
  console.log(factorial(parseInt(line)));
  rl.close();
});

function factorial(num) {
  if(num <= 0) return 1
  return num * factorial(num - 1);
}