const arr = [
  " * * *\n*     *\n*     *\n*     *\n\n*     *\n*     *\n*     *\n * * *\n",
  "\n      *\n      *\n      *\n\n      *\n      *\n      *\n",
  " * * *\n      *\n      *\n      *\n * * *\n*\n*\n*\n * * *\n",
  " * * *\n      *\n      *\n      *\n * * *\n      *\n      *\n      *\n * * *\n",
  "\n*     *\n*     *\n*     *\n * * *\n      *\n      *\n      *\n",
  " * * *\n*\n*\n*\n * * *\n      *\n      *\n      *\n * * *\n",
  " * * *\n*\n*\n*\n * * *\n*     *\n*     *\n*     *\n * * *\n",
  " * * *\n      *\n      *\n      *\n\n      *\n      *\n      *\n",
  " * * *\n*     *\n*     *\n*     *\n * * *\n*     *\n*     *\n*     *\n * * *\n",
  " * * *\n*     *\n*     *\n*     *\n * * *\n      *\n      *\n      *\n * * *\n",
];
const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", (line) => {
  console.log(arr[+line]);
});
