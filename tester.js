const fs = require("fs");
const path = require("path");
const childProcess = require("child_process");
const rlI = require("readline").createInterface(process.stdin, process.stdout);

const options = (() => {
  const defaults = {
    codePath: process.argv[2],
    testCaseMode: "",
  };
  const flagType = [
    [
      "testCase",
      "tc",
      (value) => (defaults.testCaseMode = value || "./testcase.json"),
    ],
  ];
  for (const param of process.argv.slice(3)) {
    for (const [long, short, setter] of flagType) {
      const [key, value] = param.split(":");
      if (
        key.start == `--${long}` ||
        key.toUpperCase() == `-${short.toUpperCase()}`
      ) {
        setter(value);
        break;
      }
    }
  }
  return defaults;
})();
const cachedTestcasePath = options.testCaseMode;

const asyncQuestion = async (query) =>
  new Promise((res) => rlI.question(query, res));

async function forkProcess(line) {
  return new Promise((res, rej) => {
    const childPros = childProcess
      .fork(options.codePath, { stdio: "pipe" })
      .on("error", rej)
      .on("exit", res);
    childPros.stdio[1].setEncoding("utf-8").on("data", console.log);

    const endProcess = () => {
      childPros.stdio[0].end();
      childPros.stdio[1].setEncoding("utf-8").on("data", () => {
        childPros.kill();
        res();
      });
    };
    const lineHandler = (line) => {
      childPros.stdio[0].write(line);
      endProcess();
    };

    if (options.testCaseMode) {
      console.log(line);
      lineHandler(line);
    } else {
      rlI.on("line", lineHandler);
    }
  });
}

async function runCode() {
  return new Promise(async (res, rej) => {
    if (!options.testCaseMode) forkProcess().then(res).catch(rej);
    else {
      const buffer = fs.readFileSync(
        path.join(__dirname, options.testCaseMode)
      );
      const testCases = Array.from(JSON.parse(buffer.toString()));
      console.log(
        `${testCases.length}개의 테스트 케이스 발견! 모두 동시에 실행됩니다...`
      );
      for (const line of testCases) await forkProcess(line).catch(rej);
      res();
    }
  });
}

const start = async () => {
  console.log(
    "    Node.js 백준 문제 테스터    " + "\n================================="
  );

  while (true) {
    await runCode().catch((e) => console.log("실패!, ", e));

    if (options.testCaseMode) {
      await asyncQuestion(
        "테스트 케이스를 계속 진행할까요? [Y,y / N,n] (기본 Y)"
      ).then((res) => {
        if (res.toUpperCase() == "N") options.testCaseMode = "";
      });
    } else
      await asyncQuestion(
        "아무 키를 누르세요... (테스트 케이스 계속하기: [T])"
      ).then((res) => {
        if (res.toUpperCase() == "T") options.testCaseMode = cachedTestcasePath;
      });
  }
};
start();
