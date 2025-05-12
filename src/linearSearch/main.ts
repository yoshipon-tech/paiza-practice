export {};

function main() {
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
    const number = lines[0];
    const list = lines[1].split(" ");
    const target = lines[2];
    const answer: string[] = [];
    list.map((list, i) => {
      if (list === target) {
        answer.push((i + 1).toString());
      }
    });
    console.log(answer.join("\n"));
  });
}

function HighLow() {
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
    const list = lines[1].split(" ").map(Number);

    list.sort((a, b) => {
      return a - b;
    });
    console.log(`${list[number - 1]} ${list[0]}`);
  });
}

function test() {
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
    const [start, last] = lines[number + 1].split(" ");

    lines.slice(1, number + 1).map((list) => {
      const [left, right] = list.split(" ");
      if (Number(right) >= Number(start) && Number(right) <= Number(last)) {
        console.log(left);
      }
    });
  });
}

function k() {
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
    const list = lines[1].split(" ");
    const target = lines[2];

    list.sort((a, b) => {
      return Number(a) - Number(b);
    });

    console.log(list[number - Number(target)]);
  });
}


