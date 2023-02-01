const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", (line) => {
  print(+line);
  rl.close();
});

function print(repeat) {
  for (let i = 0; i < repeat; i++)
    console.log(
      " @@@   @@@ \n@   @ @   @\n@    @    @\n@         @\n @       @ \n  @     @  \n   @   @   \n    @ @    \n     @     "
    );
}
