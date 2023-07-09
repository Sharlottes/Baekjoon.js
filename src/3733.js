const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", line => {
    const [n, s] = line.split(" "); 
    console.log(Math.floor(+s / (+n+1)));
});