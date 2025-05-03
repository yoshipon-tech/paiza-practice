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
        var answer = Array.from({ length: number }, function (_, r) {
            return Array.from({ length: number }, function (_, c) { return (r + 1) * (c + 1); }).join(" ");
        }).join("\n");
        console.log(answer);
    });
}
