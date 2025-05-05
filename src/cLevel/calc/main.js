"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calc() {
    process.stdin.resume();
    process.stdin.setEncoding("utf8");
    // 自分の得意な言語で
    // Let's チャレンジ！！
    var lines = [];
    var reader = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    reader.on("line", function (line) {
        lines.push(line);
    });
    reader.on("close", function () {
        var _a = lines[0].split(" ").map(Number), a = _a[0], b = _a[1], c = _a[2], d = _a[3];
        console.log(Math.pow((a + b) * c, 2) % d);
    });
}
function final() {
    process.stdin.resume();
    process.stdin.setEncoding("utf8");
    // 自分の得意な言語で
    // Let's チャレンジ！！
    var lines = [];
    var reader = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    reader.on("line", function (line) {
        lines.push(line);
    });
    reader.on("close", function () {
        var N = 10000;
        var _a = lines[0].split(" ").map(Number), A = _a[0], B = _a[1];
        var answer = (N / A) % B;
        console.log(Math.trunc(answer));
    });
}
