const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", line => {
  let asc = true;
  let des = true;
  const str = line.replace(/\s/g, '');
  for(let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if(+char != i + 1) asc = false;
    if(+char != str.length - i) des = false;
  }
  if(asc) console.log('ascending');
  else if(des) console.log('descending');
  else console.log('mixed');
  rl.close();
});