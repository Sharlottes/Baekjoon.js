const rl = require("readline").createInterface(process.stdin, process.stdout);
const obj = {};
let max = 0;
let out = '';
rl.on("line", line => {
  //제공된 문자열들을 {문자: 개수}로 분류
  for(let i = 0, m = line.length; i < m; i++) {
    const char = line.charAt(i).toUpperCase();
    obj[char] ??= 0;
    obj[char]++;
  }

  //분류한 문자열들 중 가장 개수가 많은 문자열 찾기
  for(const [char, len] of Object.entries(obj)) {
    if(max < len) { //현재 갯수보다 클 경우 교체
      max = len;
      out = char;
    }
    else if(out != char && max == len) { //다른 문자이면서 개수가 같으면 ? 반환
      out = '?';
    }
  }
  console.log(out);
  rl.close();
});