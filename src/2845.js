const rl = require("readline").createInterface(process.stdin, process.stdout);
let people;
rl.on("line", (line) => {
  if (!people) people = line.split(/\s/).reduce((a, e) => a * +e, 1);
  else {
    console.log(
      line
        .split(/\s/)
        .map((a) => +a - people)
        .join(" ")
    );
    rl.close();
  }
});
