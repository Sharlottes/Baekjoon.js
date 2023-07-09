const rl = require("readline").createInterface(process.stdin, process.stdout);
const arr = Array(30).fill(true);
let lc = 0;
rl.on("line", line => {
    lc++;
    arr[+line - 1] = false;
    if(lc == 28) {
        const i = arr.indexOf(true);
        console.log(i+1);
        console.log(arr.indexOf(true, i+1)+1);
        rl.close();
    }
});