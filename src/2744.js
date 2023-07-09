const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", line => {
    let res = "";
    for(const char of line) {
        const upper = char.toUpperCase();
        const lower = char.toLowerCase();

        if(char == lower) res += upper;
        else if(char == upper) res += lower;
    }
    console.log(res)
    rl.close();
});