const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", (line) => {
  if (line == ".") return;

  const stack = [];
  for (const char of line) {
    switch (char) {
      case "[":
        stack.push("[");
        break;
      case "]":
        if (stack.pop() != "[") {
          console.log("no");
          return;
        }
        break;
      case "(":
        stack.push("(");
        break;
      case ")":
        if (stack.pop() != "(") {
          console.log("no");
          return;
        }
        break;
    }
  }

  if (stack.length == 0) console.log("yes");
  else console.log("no");
});
