const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", (line) => {
  if (line.startsWith("#")) {
    rl.close();
    return;
  }

  const [name, age, weight] = line.split(/\s/);
  console.log(`${name} ${age > 17 || weight >= 80 ? "Senior" : "Junior"}`);
});
