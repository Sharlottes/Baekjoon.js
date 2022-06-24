require("readline").createInterface(process.stdin, process.stdout)
.on("line", line => {
  console.log(line.charCodeAt(0));
  rl.close();
});