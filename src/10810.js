const rl = require("readline").createInterface(process.stdin, process.stdout);
let arr,
  ml = 0,
  lc = 0;
rl.on("line", (line) => {
  if (!arr) {
    const [length, max] = line.split(/\s/).map(Number);

    arr = Array.from({ length }, () => 0);
    ml = max;
    return;
  }
  lc++;
  const [from, to, value] = line.split(/\s/).map(Number);
  for (let i = from; i <= to; i++) {
    arr[i - 1] = value;
  }
  if (lc == ml) {
    console.log(arr.join(" "));
    return;
  }
});
