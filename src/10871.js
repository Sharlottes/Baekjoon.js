const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0,
  number = 0;
let result = "";
rl.on("line", function (line) {
  if (count++ == 0) number = parseInt(line.split(/\s/g)[1]);
  else {
    result = line
      .split(/\s/g)
      .filter((e) => parseInt(e) < number)
      .join(" ");
    rl.close();
  }
}).on("close", () => {
  console.log(result);
  process.exit();
});
