const rl = require("readline").createInterface(process.stdin, process.stdout);
let lc = 0, nums;
rl.on("line", line => {
    lc++;
    if(lc == 2) nums = line.split(" ").map(Number);
    if(lc == 3) {
        console.log(nums.filter(n => n == +line).length);
        rl.close();
    }
});