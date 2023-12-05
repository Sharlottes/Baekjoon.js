//@ts-check
const rl = require("readline").createInterface(process.stdin, process.stdout);

let row = 0;
let max = {
  number: -1,
  row: 1,
  col: 1,
};
const maxLine = 9;
rl.on("line", (line) => {
  row++;
  const nums = line.split(/\s/).map(Number);
  for (let col = 0; col < nums.length; col++) {
    if (nums[col] > max.number) {
      max.row = row;
      max.col = col + 1;
      max.number = nums[col];
    }
  }
  if (row == maxLine) {
    console.log(max.number);
    console.log(max.row, max.col);
  }
});
