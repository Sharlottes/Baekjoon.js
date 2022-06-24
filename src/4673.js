function d(n) {
  return (n += String(n)
    .split("")
    .map(Number)
    .reduce((a, b) => a + b, 0));
}
const flags = Array(10001).fill(false);
let answer = "";
for (let i = 1; i < 10001; i++) {
  if (!flags[i]) {
    let dn = d(i);
    answer += i + "\n";
    while (dn < 10001) {
      flags[dn] = true;
      dn = d(dn);
    }
  }
}
console.log(answer);