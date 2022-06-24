const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  const [n1, n2, n3] = line.split(/\s/g).map(Number);
  console.log((()=>{
    if(n1 == n2 && n2 == n3) return 10000 + n1 * 1000;
  else if(n1 == n2) return 1000 + n1 * 100;
  else if(n2 == n3) return 1000 + n2 * 100;
  else if(n3 == n1) return 1000 + n3 * 100;
  else return Math.max(n1, n2, n3) * 100;
  })());
  rl.close();
});