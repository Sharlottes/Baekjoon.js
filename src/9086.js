const rl = require("readline").createInterface(process.stdin, process.stdout);
let lc = 0, ml;
rl.on("line", line => {
    if(lc == 0) ml = +line;
    else {
        console.log(line[0]+line[line.length-1]);
        if(lc == ml) rl.close();
    }
    
    lc++;
});