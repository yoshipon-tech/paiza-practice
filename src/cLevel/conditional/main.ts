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

function better() {
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
    const [left, middle, right] = lines[0].split(" ").map(Number);

    console.log((left > 9 && middle > 9) || right > 9 ? "YES" : "NO");
  });
}

function fizzBuzz() {
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

    const fizzBuzz = (n) => {
      return n % 3 === 0 && n % 5 === 0
        ? "FizzBuzz"
        : n % 3 === 0
        ? "Fizz"
        : n % 5 === 0
        ? "Buzz"
        : n;
    };

    console.log(fizzBuzz(number));
  });
}

function final() {
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
    const [left, right] = lines[0].split(" ").map(Number);

    const calc = (x, y) => {
      return x > 0 ? x * x : y > 0 ? x * y : y * y;
    };
    console.log(calc(left, right));
  });
}
