"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function zero() {
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
        var number = Number(lines[0]);
        var answer = Array.from({ length: number }, function (_, i) { return lines[i + 1]; }).filter(function (line) { return line === "0"; });
        console.log(answer.length < 1 ? "NO" : "YES");
    });
}
function zeroF() {
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
        var number = Number(lines[0]);
        var answer = lines.slice(1, number + 1).filter(function (line) { return line === "0"; });
        var answerSome = lines.slice(1, number + 1).some(function (line) { return line === "0"; });
    });
}
