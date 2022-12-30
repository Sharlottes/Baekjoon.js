const rl = require("readline").createInterface(process.stdin, process.stdout);
let ml, cl;

const getLCM = (a, b) => {
  for(let i = 1; i < Infinity; i++) {
    if(a * i % b == 0) return a * i;
  }
}


rl.on("line", line => {
  if(!ml) {
    ml = +line;
    return;
  } else {
    console.log(getLCM(...line.split(/\s/).map(Number)));

    if(++cl >= ml) rl.close();
  }
});