export {};

function paiza() {
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

    console.log(
      Array.from({ length: Number(number) }, (_, i) => {
        const [left, right] = lines[i + 1].split(" ");
        const answer = `${left} ${Number(right) + 1}`;
        return answer;
      }).join("\n")
    );
  });
}

function paiza2() {
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

    console.log(
      Array.from({ length: Number(number) }, (_, i) => {
        const [start, hStr, mStr] = lines[i + 1].split(" ");

        const [sH, sM] = start.split(":").map(Number); // 開始時刻
        const addMin = Number(hStr) * 60 + Number(mStr); // 継続時間

        const endTotal = (sH * 60 + sM + addMin) % 1440; // 1 日を 0‑1,439 でラップ
        const eH = String(Math.floor(endTotal / 60)).padStart(2, "0");
        const eM = String(endTotal % 60).padStart(2, "0");
        return `${eH}:${eM}`;
      }).join("\n")
    );
  });
}

function paiza3() {
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
    const [number, count, target] = lines[0].split(" ");

    const answer = lines
      .slice(1, Number(number + 1))
      .map((line) => {
        line.split(" ").filter((line) => line == target).length;
      })
      .join("\n");
    console.log(answer);
  });
}

function paiza4() {
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
    const [number] = lines[0].split(" ");

    const answer = lines
      .slice(1, Number(number + 1))
      .sort((a, b) => {
        const [gold, silver] = a.split(" ").map(Number);
        const [gold1, silver1] = b.split(" ").map(Number);
        //Silverを比べる
        if (silver !== silver1) {
          return silver1 - silver;
        }
        return gold1 - gold;
      })
      .join("\n");
    console.log(answer);
  });
}
