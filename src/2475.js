const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", line => {
  console.log(line.split(/\s/g).reduce((a, e) => a + +e * +e, 0)%10);
  rl.close();
});