const rl = require("readline").createInterface(process.stdin, process.stdout);
let arr,
  ml = 0,
  lc = 0;
rl.on("line", (line) => {
  if (!arr) {
    const [length, max] = line.split(/\s/).map(Number);

    arr = Array.from({ length }, (_, i) => i + 1);
    ml = max;
    return;
  }
  lc++;

  let [a, b] = line.split(/\s/).map(Number);
  if (a > b) {
    let tmp = b;
    b = a;
    a = tmp;
  }

  const copied = arr.slice(a - 1, b).reverse();
  for (let i = a; i <= b; i++) {
    arr[i - 1] = copied[i - a];
  }

  if (lc == ml) {
    console.log(arr.join(" "));
    return;
  }
});
