const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", (line) => {
  console.log(
    line
      .split(/\s/)
      .sort((a, b) => +a - +b)
      .join(" ")
  );
  rl.close();
});
