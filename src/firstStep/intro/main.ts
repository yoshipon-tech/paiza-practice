process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！
const lines: string[] = [];
const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", (line: string) => {
  lines.push(line);
});
reader.on("close", () => {
  console.log("name: 名前");
  console.log("language: 言語");
  console.log("hitokoto: 一言");
});
