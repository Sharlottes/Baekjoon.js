const rl = require("readline").createInterface(process.stdin, process.stdout);
let lc = 0;
let res = "";
rl.on("line", line => {
    lc++;
    const [T, F, S, P, TP] = line.split(" ");
    res += (lc == 2 ? " " : "") + (+T * 6 + +F * 3 + +S * 2 + +P + +TP * 2).toString();
    if(lc == 2) {
        console.log(res);
        rl.close();
    }
});