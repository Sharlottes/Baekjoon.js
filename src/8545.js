const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", line => {
    let str = "";
    for(let i = 0, m = line.length; i < m; i++) {
        str += line[m - i - 1];
    }
    console.log(str);
    rl.close();
});