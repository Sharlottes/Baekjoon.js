const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", line => {
  const [staticCost, dynamicCost, price] = line.split(/\s/g).map(Number);
  if(dynamicCost >= price) {
    console.log(-1);
  }
  else {
    console.log(Math.floor(staticCost/(price-dynamicCost))+1);
  }
  rl.close();
});