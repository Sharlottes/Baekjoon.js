const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", (line) => {
  console.log(
    Array.from(line)
      .sort((a, b) => +b - +a)
      .join("")
  );
});
