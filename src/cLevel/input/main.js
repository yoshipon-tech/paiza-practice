"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function input() {
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
        var output = lines[0].split(" ");
        output.forEach(function (line) { return console.log(line); });
    });
}
function input2() {
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
        var output = lines[0].split(" ");
        console.log(Array.from({ length: Number(output[0]) }, function (_, i) { return output[i + 1]; }).join("\n"));
    });
}
function filter() {
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
        var list = Array.from({ length: Number(lines[0]) }, function (_, i) { return lines[i + 1]; });
        var output = list.filter(function (line, i) { return i === 8 - 1; });
        console.log(output.join(" "));
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
        var N = Number(lines[0]);
        var out = lines.slice(1, N + 1).map(function (l) {
            var arr = l.split(/\s+/);
            arr.shift(); // 先頭 M_i を捨てる
            return arr.join(" ");
        });
        console.log(out.join("\n"));
    });
}
