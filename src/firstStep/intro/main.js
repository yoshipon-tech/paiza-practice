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
    console.log("name: 名前");
    console.log("language: 言語");
    console.log("hitokoto: 一言");
});
