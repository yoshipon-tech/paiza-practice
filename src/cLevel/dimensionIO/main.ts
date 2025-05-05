export {};

function output() {
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
    const [, b] = lines[0].split(" ").map(Number);
    const list = lines[1].split(" ");
    console.log(list.filter((line, i) => b === i + 1).join(""));
  });
}

function output2() {
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
    const [row, column, targetRow, targetColumn] = lines[0]
      .split(/\s+/)
      .map(Number);

    //これで2次元配列に変更
    const matrix: number[][] = Array.from({ length: row }, (_, i) =>
      lines[i + 1].trim().split(/\s+/).map(Number)
    );

    console.log(matrix[targetRow - 1][targetColumn - 1]);
  });
}

function output3() {
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
    const [target, count] = lines[0].split(/\s+/).map(Number);

    const answer: number = lines[1]
      .split(/\s+/)
      .filter((line) => Number(line) === target).length;
    console.log(answer);
  });
}

function output4() {
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
    const [count, target] = lines[0].split(/\s+/).map(Number);

    const answer: string[] = lines[1].split(/\s+/).sort();
    console.log(answer[target - 1]);
  });
}

function output5() {
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
    const count = Number(lines[0]);

    // 省略しない記載方法
    // const fibs = (n) =>
    //   [...Array(n)]
    //     .reduce(
    //       ({ acc, a, b }) => ({
    //         acc: acc.concat(a),
    //         a: b,
    //         b: a + b,
    //       }),
    //       { acc: [], a: 0, b: 1 }
    //     ).acc;

    //式定義
    const fibs = (n) => [...Array(n)].reduce(callbackFn, initialData).acc;

    // //文定義
    // function fibsF(n) {
    //   return [...Array(n)].reduce(callbackFn, initialData).acc;
    // }

    //式定義(reduceにオブジェクトとして渡す)
    const callbackFn = ({ acc, a, b }) => ({
      acc: acc.concat(a),
      a: b,
      b: a + b,
    });

    // //文定義(reduceにオブジェクトとして渡す)
    // function callbackFnF({ acc, a, b }) {
    //   return { acc: acc.concat(a), a: b, b: a + b };
    // }

    const initialData = { acc: [], a: 0, b: 1 };

    console.log(fibs(count));
    // console.log(fibsF(5));
  });
}
