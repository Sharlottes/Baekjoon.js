const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", line => {
  const numbers = line.split(/\s/g).map(Number);
  let i = 0;
  a: while (true) {
    i++;
    let stack = 0;
    for (let number of numbers) {
      if (i % number == 0) stack++;
      if (stack >= 3) break a;
    }
  }
  console.log(i);
  rl.close();
});