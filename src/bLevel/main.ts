export {};

function add() {
  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  // 自分の得意な言語で
  // Let's チャレンジ！！
  var lines: string[] = [];
  var reader = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  reader.on("line", (line) => {
    lines.push(line);
  });
  reader.on("close", () => {
    const number = Number(lines[0]);
    const answer = lines
      .slice(1, number + 1)
      .filter((line) => Number(line) >= 5)
      .reduce((sum, i) => sum + Number(i), 0);
    console.log(answer);
  });
}

function add2() {
  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  // 自分の得意な言語で
  // Let's チャレンジ！！
  var lines: string[] = [];
  var reader = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  reader.on("line", (line) => {
    lines.push(line);
  });
  reader.on("close", () => {
    const number = Number(lines[0]);
    const answer = lines
      .slice(1, number + 1)
      .map((line) => {
        const [left, right] = line.split(" ").map(Number);
        return left === right ? left * right : left + right;
      })
      .reduce((sum, i) => sum + i);
    console.log(answer);
  });
}
