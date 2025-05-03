function main() {
  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  // 自分の得意な言語で
  // Let's チャレンジ！！
  const firstNumber: number = 0;
  var reader = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  reader.on("line", (line) => {
  });
  reader.on("close", () => {
    const answer: number = (firstNumber + 3286) * 4736 % 12312
    console.log(answer);
  });
}
