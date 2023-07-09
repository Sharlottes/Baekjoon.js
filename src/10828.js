//실패
const rl = require("readline").createInterface(process.stdin, process.stdout);
let lineCount = 0, maxLine;
const stack = new Array(10000);
let len = 0;
rl.on("line", line => {
    if(lineCount == 0) {
        maxLine = +line;
    } else {
        handleCommand(line.split(" "));
        if(lineCount + 1 == maxLine) {
            rl.close();
        }
    }
    lineCount++;
});

function handleCommand([command, value]) {
    if(command == 'push') {
        stack[len] = +value;
        len++;
    } else if(command == 'pop') {
        const value = stack[len - 1];
        if(value !== undefined) {
            console.log(value);
            stack[len] = undefined;
            len = Math.max(0, len - 1);
        } else console.log(-1);
    } else if(command == 'top') {
        console.log(stack[len-1] ?? -1);
    } else if(command == 'size') {
        console.log(len);
    } else if(command == 'empty') {
        console.log(len == 0 ? 1 : 0);
    } 
}