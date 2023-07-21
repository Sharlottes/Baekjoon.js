const arr = [
  "3628800",
  "39916800",
  "479001600",
  "6227020800",
  "87178291200",
  "1307674400000",
  "20922790000000",
  "355687428096000",
].map((n) => (BigInt(n) / 604800n).toString());

const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", (line) => console.log(arr[+line - 10]));
