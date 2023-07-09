const rl = require("readline").createInterface(process.stdin, process.stdout);
const aeiou = ["a", "e", "i", "o", "u"];
rl.on("line", (line) => {
  if (line == "#") {
    rl.close();
    return;
  }

  const str = line.toLowerCase();
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (aeiou.includes(str[i])) count++;
  }

  console.log(count);
});
