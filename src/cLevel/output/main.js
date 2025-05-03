"use strict";
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
        Array.from({ length: lines[0] }, function (_, i) { return i + 1; }).forEach(function (line) {
            return console.log(line);
        });
    });
}
function comma() {
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
        var matches = lines[0].match(/.{1,3}/g);
        console.log(matches ? matches.join(",") : "");
    });
}
function localeString() {
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
        console.log(BigInt(lines[0]).toLocaleString("ja"));
    });
}
function MultiplicationTable() {
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
        //for文で言うと二重ループをしている状態
        var answer = Array.from({ length: number }, function (_, r) {
            // ここで列・行の掛け算を実施してjoin結合
            // Array.fromが自動でインデックスにインクリメントしているのは知らなかった便利
            return Array.from({ length: number }, function (_, c) { return (r + 1) * (c + 1); }).join(" ");
        }).join("\n");
        console.log(answer);
    });
}
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
        var splitLines = lines[0].split(" ");
        var firstNumber = Number(splitLines[0]);
        var secondNumber = Number(splitLines[1]);
        //for文で言うと二重ループをしている状態
        console.log(Array.from({ length: firstNumber }, function (_, i) { return i + 1; }).join(" "));
        console.log(Array.from({ length: secondNumber }, function (_, i) { return i + 1; }).join(" "));
    });
}
function calc2() {
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
        // 外側：長さ N の「行」配列を作る
        var output = Array.from({ length: number }, function (_, i) {
            // 内側：長さ (i+1) の「列」を作り 1..i+1 を並べる
            return Array.from({ length: i + 1 }, function (_, j) { return j + 1; }).join(" ");
        }).join("\n");
    });
}
function calc3() {
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
        var loop = lines[1].split(" ");
        // 外側：長さ N の「行」配列を作る
        var output = Array.from({ length: number }, function (_, i) {
            // 内側：長さ (i+1) の「列」を作り 1..i+1 を並べる
            return Array.from({ length: Number(loop[i]) }, function (_, j) { return j + 1; }).join(" ");
        }).join("\n");
        console.log(output);
    });
}
function calc4() {
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
        var _a = lines[0].split(" ").map(Number), number = _a[0], column = _a[1];
        var array = lines[1].split(" ").map(Number);
        var loop = lines[2].split(" ").map(Number);
        var pos = 0;
        var rows = loop.map(function (len) {
            var row = array.slice(pos, pos + len).join(' ');
            pos += len;
            return row;
        });
        console.log(rows.join('\n'));
    });
}
