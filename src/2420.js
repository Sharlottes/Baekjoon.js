const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", line => {
    const [a, b] = line.split(" ").map(BigInt);
    console.log(BigInt(b - a).toString().replace("-", ""));
    rl.close();
});