const rl = require("readline").createInterface(process.stdin, process.stdout);
let lineCount = 0, maxLine;
rl.on("line", line => {
    if(lineCount == 0) {
        maxLine = +line;
    } else {
        console.log(varifyVPS(line) ? "YES" : "NO");
        if(lineCount == maxLine) {
            rl.close();
        }
    }
    lineCount++;
});

function varifyVPS(string) {
    let openCount = 0;
    for(let i = 0; i < string.length; i++) {
        const char = string[i];
        if(char === '(') openCount++;
        if(char == ')') openCount--;
        if(openCount < 0) return false;
    }
    return openCount == 0;
}