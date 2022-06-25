const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", line => {
  let [a, b] = line.split(/\s/).map(Number);
  console.log(divide(a, b, '', 0));
  rl.close();
});

function divide(a, b, res, stack) {
  if(stack >= 2000) return res;
  res += Math.floor(a/b);
  if(stack == 0) res += '.';
  return divide(a%b * 10, b, res, stack + 1);
}
/*
let u = false;
function func(a, b, res, stack) {
  if(stack >= 100000) return res;
  if(a < b) {
    let i = 1;
    while(a * i < b) {
      i *= 10;
    }
    const step = Math.round(Math.log(i)/Math.log(10)) - 1;
    res += "0".repeat(step+1);
    //console.log("%d/%d --> %d/%d ("+res+")", a, b, a * i, b);
    a *= i;
    stack += step;
  }
  let i = 0;
  while(b * i < a) {
    i++;
  }
  if(b * i == a) {
    //console.log("%d --- %d/%d --- %d몫 ("+res+")", stack, a, b, i);
    return res + i;
  }
  else {
    i -= 1;

    if(!u) {
      res += i + ".";
      u = true;
    }
    else res += i;

    //console.log("%d --- %d/%d --- %d몫 ("+res+")", stack, a, b, i);
    return func((a - b * i) * 10, b, res, stack + 1);
  }
}
*/