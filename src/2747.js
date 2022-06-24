const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", line => {
  console.log(fibo(0, 1, 0, parseInt(line)));
  rl.close();
});

function fibo(num1, num2, count, max) {
  if(count >= max) return num1;
  return fibo(num2, num1 + num2, count+1, max);
}