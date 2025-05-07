"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function main() {
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
        var number = lines[0];
        var list = lines[1].split(" ");
        var target = lines[2];
        var answer = [];
        list.map(function (list, i) {
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
        var list = lines[1].split(" ").map(Number);
        list.sort(function (a, b) {
            return a - b;
        });
        console.log("".concat(list[number - 1], " ").concat(list[0]));
    });
}
function test() {
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
        var _a = lines[number + 1].split(" "), start = _a[0], last = _a[1];
        lines.slice(1, number + 1).map(function (list) {
            var _a = list.split(" "), left = _a[0], right = _a[1];
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
        var list = lines[1].split(" ");
        var target = lines[2];
        list.sort(function (a, b) {
            return Number(a) - Number(b);
        });
        console.log(list[number - Number(target)]);
    });
}
