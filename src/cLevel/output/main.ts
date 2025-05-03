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

function calc() {
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
    const splitLines = lines[0].split(" ");
    const firstNumber = Number(splitLines[0]);
    const secondNumber = Number(splitLines[1]);

    //for文で言うと二重ループをしている状態
    console.log(Array.from({ length: firstNumber }, (_, i) => i + 1).join(" "));
    console.log(
      Array.from({ length: secondNumber }, (_, i) => i + 1).join(" ")
    );
  });
}

function calc2() {
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

    // 外側：長さ N の「行」配列を作る
    const output = Array.from({ length: number }, (_, i) => {
      // 内側：長さ (i+1) の「列」を作り 1..i+1 を並べる
      return Array.from({ length: i + 1 }, (_, j) => j + 1).join(" ");
    }).join("\n");
  });
}

function calc3() {
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
    const loop = lines[1].split(" ");
    // 外側：長さ N の「行」配列を作る
    const output = Array.from({ length: number }, (_, i) => {
      // 内側：長さ (i+1) の「列」を作り 1..i+1 を並べる
      return Array.from({ length: Number(loop[i]) }, (_, j) => j + 1).join(" ");
    }).join("\n");
    console.log(output);
  });
}

function calc4() {
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
    const [number, column] = lines[0].split(" ").map(Number);
    const array = lines[1].split(" ").map(Number);
    const loop = lines[2].split(" ").map(Number);
    let pos = 0;
    const rows = loop.map(len => {
      const row = array.slice(pos, pos + len).join(' ');
      pos += len;
      return row;
    })
    console.log(rows.join('\n'));
  });
}
