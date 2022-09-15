const rl = require("readline").createInterface(process.stdin, process.stdout);
let lineCount = 0;
let myAh;
rl.on("line", line => {
    lineCount++;
    if(lineCount == 1) myAh = line.replace(/h/g, "").length;
    else if(lineCount == 2) {
        console.log(myAh >= line.replace(/h/g, "").length ? 'go' : 'no');
        rl.close();
    }
});