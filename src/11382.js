const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", line => {
    const [a, b, c] = line.split(/\s/g).map(BigInt);
    console.log((a + b + c).toString());
    rl.close();
});