export {};
function output() {
  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  // 自分の得意な言語で
  // Let's チャレンジ！！
  const lines: number[] = [];
  const reader = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  reader.on("line", (line) => {
    lines.push(line);
  });
  reader.on("close", () => {
    Array.from({ length: lines[0] }, (_, i) => i + 1).forEach((line) =>
      console.log(line)
    );
  });
}

function comma() {
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
    const matches = lines[0].match(/.{1,3}/g);
    console.log(matches ? matches.join(",") : "");
  });
}

function localeString() {
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
    console.log(BigInt(lines[0]).toLocaleString("ja"));
  });
}

function MultiplicationTable() {
  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  // 自分の得意な言語で
  // Let's チャレンジ！！
  const lines: number[] = [];
  const reader = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  reader.on("line", (line) => {
    lines.push(line);
  });
  reader.on("close", () => {
    const number: number = lines[0];
    //for文で言うと二重ループをしている状態
    const answer = Array.from({ length: number }, (_, r) =>
      // ここで列・行の掛け算を実施してjoin結合
      // Array.fromが自動でインデックスにインクリメントしているのは知らなかった便利
      Array.from({ length: number }, (_, c) => (r + 1) * (c + 1)).join(" ")
    ).join("\n");
    console.log(answer);
  });
}
