const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", (line) => console.log(line[0] == line[1] ? 1 : 0));
