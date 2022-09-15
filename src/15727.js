const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", line => {
    console.log(Math.ceil(+line/5));
    rl.close();
});