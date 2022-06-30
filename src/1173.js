const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", line => {
  const [N, m, M, T, R] = line.split(/\s/g).map(Number);
  let X = m;
  let res = 0;
  let i = 0;
  if (m + T > M) {
    console.log(-1);
  } else {
    while (true) {
      i++;
      if (X + T <= M) {
        X += T;
        res++;
      } else {
        X = Math.max(m, X - R);
      }

      if (res >= N) break;
    }
    console.log(i || -1);
  }
  rl.close();
});