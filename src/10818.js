const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const count = 0;
rl.on("line", function (line) {
  let count = 0;
  let cycle = (num) => {
    count++;
    let [a, b] = (num.length < 2 ? "0" + num : num)
      .slice(0, 2)

      .split("")
      .map((e) => parseInt(e));
    let res = b + `${a + b}`.split("").pop();
    if ((line.length < 2 ? "0" + line : line) == res) console.log(count);
    else cycle(res);
  };
  cycle(line);
  rl.close();
});
