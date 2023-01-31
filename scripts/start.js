const fs = require("fs");
const path = require("path");
const [, , code] = process.argv;

console.log("템플릿 코드 읽어들이는 중...");
const templateCodes = fs
  .readFileSync(path.join(__dirname, "../template", "/readline_ex.js"))
  .toString();

console.log(`src/${code}.js 생성 중...`);
const codePath = path.join(__dirname, "../src", `/${code}.js`);
fs.writeFileSync(codePath, templateCodes);

console.log(
  `${code}.js 생성 및 열람 완료!` +
    `\n\u001b[36;1myarn qt ${code} -tc\u001b[0m 로 빠른 퀵테스트를 할 수 있습니다!` +
    `\nhappy hacking :)`
);
