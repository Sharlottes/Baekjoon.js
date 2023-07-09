const rl = require("readline").createInterface(process.stdin, process.stdout);
let N;
rl.on("line", line => {
    if(!N) N = +line;
    else {
        const an = line.split(/\s/).map(BigInt);
        let max = an[0], min = an[0], index = 0;
        for(let i = 0; i < N; i++) {
            const a = an[i];
            if(a >= max) {
                max = a;
                index = i;
            }
        }
        for(let i = 0; i <= index; i++) {
            const a = an[i];
            if(a < min) min = a;
        }
        console.log((max-min).toString());
        rl.close();
    }
});