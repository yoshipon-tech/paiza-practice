"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function paiza() {
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
        console.log(Array.from({ length: Number(number) }, function (_, i) {
            var _a = lines[i + 1].split(" "), left = _a[0], right = _a[1];
            var answer = "".concat(left, " ").concat(Number(right) + 1);
            return answer;
        }).join("\n"));
    });
}
function paiza2() {
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
        console.log(Array.from({ length: Number(number) }, function (_, i) {
            var _a = lines[i + 1].split(" "), start = _a[0], hStr = _a[1], mStr = _a[2];
            var _b = start.split(":").map(Number), sH = _b[0], sM = _b[1]; // 開始時刻
            var addMin = Number(hStr) * 60 + Number(mStr); // 継続時間
            var endTotal = (sH * 60 + sM + addMin) % 1440; // 1 日を 0‑1,439 でラップ
            var eH = String(Math.floor(endTotal / 60)).padStart(2, "0");
            var eM = String(endTotal % 60).padStart(2, "0");
            return "".concat(eH, ":").concat(eM);
        }).join("\n"));
    });
}
function paiza3() {
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
        var _a = lines[0].split(" "), number = _a[0], count = _a[1], target = _a[2];
        var answer = lines
            .slice(1, Number(number + 1))
            .map(function (line) {
            line.split(" ").filter(function (line) { return line == target; }).length;
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
    var lines = [];
    var reader = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    reader.on("line", function (line) {
        lines.push(line);
    });
    reader.on("close", function () {
        var number = lines[0].split(" ")[0];
        var answer = lines
            .slice(1, Number(number + 1))
            .sort(function (a, b) {
            var _a = a.split(" ").map(Number), gold = _a[0], silver = _a[1];
            var _b = b.split(" ").map(Number), gold1 = _b[0], silver1 = _b[1];
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
