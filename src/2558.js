const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let number = 0;
rl.on("line", function (line) {
  if (!line) return rl.close();
  number += parseInt(line);
}).on('close', ()=>{
  console.log(number);
  process.exit();
});