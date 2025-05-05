"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
function output() {
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
        var _a = lines[0].split(" ").map(Number), b = _a[1];
        var list = lines[1].split(" ");
        console.log(list.filter(function (line, i) { return b === i + 1; }).join(""));
    });
}
function output2() {
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
        var _a = lines[0]
            .split(/\s+/)
            .map(Number), row = _a[0], column = _a[1], targetRow = _a[2], targetColumn = _a[3];
        //これで2次元配列に変更
        var matrix = Array.from({ length: row }, function (_, i) {
            return lines[i + 1].trim().split(/\s+/).map(Number);
        });
        console.log(matrix[targetRow - 1][targetColumn - 1]);
    });
}
function output3() {
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
        var _a = lines[0].split(/\s+/).map(Number), target = _a[0], count = _a[1];
        var answer = lines[1]
            .split(/\s+/)
            .filter(function (line) { return Number(line) === target; }).length;
        console.log(answer);
    });
}
function output4() {
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
        var _a = lines[0].split(/\s+/).map(Number), count = _a[0], target = _a[1];
        var answer = lines[1].split(/\s+/).sort();
        console.log(answer[target - 1]);
    });
}
function output5() {
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
        var count = Number(lines[0]);
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
        var fibs = function (n) { return __spreadArray([], Array(n), true).reduce(callbackFn, initialData).acc; };
        // //文定義
        // function fibsF(n) {
        //   return [...Array(n)].reduce(callbackFn, initialData).acc;
        // }
        //式定義(reduceにオブジェクトとして渡す)
        var callbackFn = function (_a) {
            var acc = _a.acc, a = _a.a, b = _a.b;
            return ({
                acc: acc.concat(a),
                a: b,
                b: a + b,
            });
        };
        // //文定義(reduceにオブジェクトとして渡す)
        // function callbackFnF({ acc, a, b }) {
        //   return { acc: acc.concat(a), a: b, b: a + b };
        // }
        var initialData = { acc: [], a: 0, b: 1 };
        console.log(fibs(count));
        // console.log(fibsF(5));
    });
}
