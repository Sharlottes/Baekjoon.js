const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  let [hour, min] = line.split(/\s/g).map((e) => parseInt(e));
  min += hour * 60 - 45;
  if (min < 0) min += 24 * 60;
  hour = parseInt(min / 60);
  min %= 60;
  console.log(`${hour} ${min}`);
  rl.close();
});
