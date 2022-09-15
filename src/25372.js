const rl = require("readline").createInterface(process.stdin, process.stdout);
let lc = 0, ml;
rl.on("line", line => {
    if(lc == 0) ml = +line;
    else console.log(line.length >= 6 && line.length <= 9 ? 'yes' : 'no');
    if(lc == ml) rl.close();
    lc++;
});