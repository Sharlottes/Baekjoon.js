const rl = require("readline").createInterface(process.stdin, process.stdout);
let lc = 0, a, b, c;
rl.on("line", line => {
    lc++;

    switch(lc) {
        case 1: {
            a = BigInt(line);
            break;
        }
        case 2: {
            b = BigInt(line);
            break;
        }
        case 3: {
            c = BigInt(line);
            
            console.log(((b-c)/a).toString());
            rl.close();
            break;
        }
    }
});