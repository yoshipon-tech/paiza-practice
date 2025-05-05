export {};

function input() {
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
    const output = lines[0].split(" ");
    output.forEach((line) => console.log(line));
  });
}

function input2() {
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
    const output = lines[0].split(" ");
    console.log(
      Array.from({ length: Number(output[0]) }, (_, i) => output[i + 1]).join(
        "\n"
      )
    );
  });
}

function filter() {
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
    const list = Array.from(
      { length: Number(lines[0]) },
      (_, i) => lines[i + 1]
    );
    const output = list.filter((line, i) => i === 8 - 1);
    console.log(output.join(" "));
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
    const N = Number(lines[0]);
    // 先頭の数字を除外し、最大値までを配列として取得する。
    const out = lines.slice(1, N + 1).map((l) => {
      // 一つ目の配列を空白文字で分解する
      const arr = l.split(/\s+/);
      // 先頭を削除する
      arr.shift();
      //残りを結合してstringで返す。
      return arr.join(" ");
    });
    console.log(out.join("\n"));
  });
}
