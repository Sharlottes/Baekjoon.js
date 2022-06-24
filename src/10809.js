const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", line => {
  let string = line.split('');
  console.log(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'].map(e => string.indexOf(e)).join(' '));
  rl.close();
});