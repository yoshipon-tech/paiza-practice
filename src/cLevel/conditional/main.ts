export {};

function zero() {
  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  // 自分の得意な言語で
  // Let's チャレンジ！！
  const lines: string[] = [];
  const reader = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  reader.on("line", (line) => {
    lines.push(line);
  });
  reader.on("close", () => {
    const number = Number(lines[0]);
    const answer = Array.from(
      { length: number },
      (_, i) => lines[i + 1]
    ).filter((line) => line === "0");
    console.log(answer.length < 1 ? "NO" : "YES");
  });
}

function zeroF() {
  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  // 自分の得意な言語で
  // Let's チャレンジ！！
  const lines: string[] = [];
  const reader = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  reader.on("line", (line) => {
    lines.push(line);
  });
  reader.on("close", () => {
    const number = Number(lines[0]);

    const answer = lines.slice(1, number + 1).filter((line) => line === "0");

    const answerSome = lines.slice(1, number + 1).some((line) => line === "0");
  });
}
