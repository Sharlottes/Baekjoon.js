const rl = require("readline").createInterface(process.stdin, process.stdout);
let result = '';

rl.on("line", line => {
  
  for(let i = 1, stack = 0, m = parseInt(line); stack < m; i += 2, stack++) {
    result += " ".repeat(i) + "*".repeat(i) + "\n";
  }
  console.log(result);
  rl.close();
});