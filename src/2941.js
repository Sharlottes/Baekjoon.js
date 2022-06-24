const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", line => {
  console.log(line.replaceAll(/(c=)|(c-)|(dz=)|(d-)|(lj)|(nj)|(s=)|(z=)/g,"*").length)
  rl.close();
});