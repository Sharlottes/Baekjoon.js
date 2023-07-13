const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", (line) => {
  const [A, B] = line.split(/\s/).sort((a, b) => b.length - a.length);
  const gap = A.length - B.length;
  let min = Infinity;
  for (let i = 0; i <= gap; i++) {
    const res = compare(A, "*".repeat(i) + B + "*".repeat(gap - i));
    if (res < min) min = res;
  }
  console.log(min);
  rl.close();
});

function compare(A, B) {
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    if (B[i] == "*") continue;
    if (A[i] != B[i]) count++;
  }
  return count;
}
