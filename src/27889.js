const o = {
  NLCS: "North London Collegiate School",
  BHA: "Branksome Hall Asia",
  KIS: "Korea International School",
  SJA: "St. Johnsbury Academy",
};
const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", (line) => console.log(o[line]));
