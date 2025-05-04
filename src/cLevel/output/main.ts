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
    const rows = loop.map((len) => {
      const row = array.slice(pos, pos + len).join(" ");
      pos += len;
      return row;
    });
    console.log(rows.join("\n"));
  });
}

function fix() {
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
    const [number, fix] = lines[0].split(" ").map(Number);
    console.log(number.toFixed(fix));
  });
}

function fixLoop() {
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
    const output = Array.from({ length: number }, (_, i) => {
      const [number, fix] = lines[i + 1].split(" ").map(Number);
      console.log(number.toFixed(fix));
    });
  });
}

function space() {
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
    const [number, digit] = lines[0].split(" ").map(Number);
    const output = Array.from({ length: number }, (_, i) => {
      console.log(lines[i + 1].padStart(digit, " "));
    });
  });
}
function format() {
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
    const [number, left, right] = lines[0].split(" ");
    const output = Array.from(
      { length: Number(number) },
      () => `(${left}, ${right})`
    ).join(", ");
    console.log(output);
  });
}

function outputMultiplicationTable() {
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
    const rows = Array.from({ length: 9 }, (_, r) =>
      // ここで列・行の掛け算を実施してjoin結合
      // Array.fromが自動でインデックスにインクリメントしているのは知らなかった便利
      Array.from({ length: 9 }, (_, c) =>
        ((r + 1) * (c + 1)).toString().padStart(2, " ")
      ).join(" | ")
    );

    //桁埋めしているので下記で十分
    const separator = "=".repeat(rows[0].length);

    const withLines = rows.flatMap(
      (row, i) => (i === rows.length - 1 ? [row] : [row, separator]) // 最終行の後ろだけ挿入しない
    );
    console.log(withLines);
  });
}

function pairRow() {
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
    const [row, column, left, right] = lines[0].split(" ");
    const rows = Array.from({ length: Number(row) }, () =>
      // ここで列・行の掛け算を実施してjoin結合
      // Array.fromが自動でインデックスにインクリメントしているのは知らなかった便利
      Array.from({ length: Number(column) }, () => `(${left}, ${right})`).join(
        " | "
      )
    );

    //桁埋めしているので下記で十分
    const separator = "=".repeat(rows[0].length);

    const withLines = rows.flatMap(
      (row, i) => (i === rows.length - 1 ? [row] : [row, separator]) // 最終行の後ろだけ挿入しない
    );
    console.log(withLines.join("\n"));
  });
}

function pairRow2() {
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
    const [row, column, left, right] = lines[0].split(" ");
    const rows = Array.from({ length: Number(row) }, () =>
      // ここで列・行の掛け算を実施してjoin結合
      // Array.fromが自動でインデックスにインクリメントしているのは知らなかった便利
      Array.from(
        { length: Number(column) },
        () => `(${left.padStart(9, " ")}, ${right.padStart(9, " ")})`
      ).join(" | ")
    );

    //桁埋めしているので下記で十分
    const separator = "=".repeat(rows[0].length);

    const withLines = rows.flatMap(
      (row, i) => (i === rows.length - 1 ? [row] : [row, separator]) // 最終行の後ろだけ挿入しない
    );
    console.log(withLines.join("\n"));
  });
}
