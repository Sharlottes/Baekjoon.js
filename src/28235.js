const rl = require("readline").createInterface(process.stdin, process.stdout);
const LUT = {
  SONGDO: "HIGHSCHOOL",
  CODE: "MASTER",
  2023: "0611",
  ALGORITHM: "CONTEST",
};
rl.on("line", (line) => {
  console.log(LUT[line]);
});
