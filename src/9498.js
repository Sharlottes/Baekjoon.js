const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  let grade = parseInt(line);
  console.log(
    grade >= 90
      ? "A"
      : grade >= 80
      ? "B"
      : grade >= 70
      ? "C"
      : grade >= 60
      ? "D"
      : "F"
  );
  rl.close();
});
