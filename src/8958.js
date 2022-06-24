const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let count = 0,
  max = 0;
let result = "";
rl.on("line", function (line) {
  if (count++ == 0) max = parseInt(line);
  else {
    let ox = line.split("");
    let point = 0;
    let beforeo = 0;
    for (var i = 0; i < ox.length; i++) {
      if (ox[i] == "O") {
        beforeo++;
        point += beforeo;
      } else beforeo = 0;
    }
    result += point + "\n";
    if (count == max + 1) rl.close();
  }
}).on("close", () => {
  console.log(result);
  process.exit();
});
