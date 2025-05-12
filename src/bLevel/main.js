"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add() {
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
        var answer = lines
            .slice(1, number + 1)
            .filter(function (line) { return Number(line) >= 5; })
            .reduce(function (sum, i) { return sum + Number(i); }, 0);
        console.log(answer);
    });
}
function add2() {
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
        var answer = lines
            .slice(1, number + 1)
            .map(function (line) {
            var _a = line.split(" ").map(Number), left = _a[0], right = _a[1];
            return left === right ? left * right : left + right;
        })
            .reduce(function (sum, i) { return sum + i; });
        console.log(answer);
    });
}
