const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", (hongjoonId) => {
  console.log(`:fan::fan::fan:`);
  console.log(`:fan::${hongjoonId}::fan:`);
  console.log(`:fan::fan::fan:`);
  rl.close();
});
