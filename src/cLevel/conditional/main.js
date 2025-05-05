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
function better() {
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
        var _a = lines[0].split(" ").map(Number), left = _a[0], middle = _a[1], right = _a[2];
        console.log((left > 9 && middle > 9) || right > 9 ? "YES" : "NO");
    });
}
function fizzBuzz() {
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
        var fizzBuzz = function (n) {
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
    var lines = [];
    var reader = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    reader.on("line", function (line) {
        lines.push(line);
    });
    reader.on("close", function () {
        var _a = lines[0].split(" ").map(Number), left = _a[0], right = _a[1];
        var calc = function (x, y) {
            return x > 0 ? x * x : y > 0 ? x * y : y * y;
        };
        console.log(calc(left, right));
    });
}
