const rl = require("readline").createInterface(process.stdin, process.stdout);

let size;
let memorise;
let lineCount = 0;
rl.on("line", (line) => {
  lineCount++;
  const inputNumbers = line.split(/\s/).map(Number);
  if (lineCount == 1) {
    size = [inputNumbers[1], inputNumbers[0]];

    memorise = Array.from({ length: size[1] }, () =>
      Array.from({ length: size[0] }, () => 0)
    );
    return;
  }

  const y = (lineCount - 2) % size[1];
  for (let x = 0; x < size[0]; x++) {
    memorise[y][x] += inputNumbers[x];
  }

  if (lineCount <= size[1] * 2) return;
  for (let y = 0; y < size[1]; y++) {
    console.log(memorise[y].join(" "));
  }
  rl.close();
});
