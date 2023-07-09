const rl = require("readline").createInterface(process.stdin, process.stdout);
const alphabets = Array.from({ length: 26 }, () => 0); //65 ~ 90
rl.on("line", (line) => {
  const str = line.toUpperCase();
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    alphabets[charCode - 65]++;
  }
  console.log(alphabets.join(" "));
  rl.close();
});
