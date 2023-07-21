const rl = require("readline").createInterface(process.stdin, process.stdout);
const lines = [];
rl.on("line", (line) => {
  lines.push(+line);
  if (lines.length < 4) return;
  if (lines[0] == lines[1] && lines[0] == lines[1] && lines[1] == lines[2] && lines[2] == lines[3])
    console.log("Fish At Constant Depth");
  else if (lines[0] < lines[1] && lines[0] < lines[1] && lines[1] < lines[2] && lines[2] < lines[3])
    console.log("Fish Rising");
  else if (lines[0] > lines[1] && lines[0] > lines[1] && lines[1] > lines[2] && lines[2] > lines[3])
    console.log("Fish Diving");
  else console.log("No Fish");
});
