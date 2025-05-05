export {};

function calc() {
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
    const [a, b, c, d] = lines[0].split(" ").map(Number);
    console.log(Math.pow((a + b) * c, 2) % d);
  });
}

function final() {
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
    const N: number = 10000;
    const [A, B] = lines[0].split(" ").map(Number);

    const answer = (N / A) % B;
    console.log(Math.trunc(answer));
  });
}
