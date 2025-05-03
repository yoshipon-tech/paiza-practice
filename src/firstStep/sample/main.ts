export{}
function N(input) {
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
    const number = lines[0];
    const output = lines[1].split(" ");
    output.forEach((line) => console.log(line));
  });
}

function comma(input) {
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
    const output = lines[1].split(",");
    output.forEach((line) => console.log(line));
  });
}

function NComma(input) {
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
    const number = lines[0];
    const output = lines[1].split(",");
    output.forEach((line) => console.log(line));
  });
}