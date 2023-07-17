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
  const [a, b] = line.split(/\s/).map(Number);

  const tmp = arr[a - 1];
  arr[a - 1] = arr[b - 1];
  arr[b - 1] = tmp;
  if (lc == ml) {
    console.log(arr.join(" "));
    return;
  }
});
