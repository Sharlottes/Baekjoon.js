const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", (line) => {
  if (line === "END") rl.close();
  else {
    console.log(line.split("").reverse().join(""));
  }
});
