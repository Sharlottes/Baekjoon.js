const rl = require("readline").createInterface(process.stdin, process.stdout);
let count = 0;
let numberLen;
let price;
let realPrice = 0;
rl.on("line", line => {
  if (count == 0) {
      price = +line;
  } else if(count == 1) {
      numberLen = +line;
  } else {
    const [a, b] = line.split(/\s/g).map(Number);
    realPrice += a * b;
    if(count - 1 == numberLen) {
      console.log(price == realPrice ? "Yes" : "No");
      rl.close();
    }
  }
  count++;
});
