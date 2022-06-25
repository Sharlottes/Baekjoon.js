const rl = require("readline").createInterface(process.stdin, process.stdout);
let result = '';

rl.on("line", line => {
  for(let i = 0, m = parseInt(line); i < m; i++) {
    result += " ".repeat(i) + "*".repeat(m-i) + "\n";
  }
  console.log(result);
  rl.close();
});