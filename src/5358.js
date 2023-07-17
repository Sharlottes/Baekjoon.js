const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", (line) => {
  console.log(
    line
      .replaceAll("i", "1234")
      .replaceAll("e", "i")
      .replaceAll("1234", "e")
      .replaceAll("I", "1234")
      .replaceAll("E", "I")
      .replaceAll("1234", "E")
  );
});
