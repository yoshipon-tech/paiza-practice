function main() {
    process.stdin.resume();
    process.stdin.setEncoding("utf8");
    // 自分の得意な言語で
    // Let's チャレンジ！！
    var firstNumber = 0;
    var reader = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    reader.on("line", function (line) {
    });
    reader.on("close", function () {
        var answer = (firstNumber + 3286) * 4736 % 12312;
        console.log(answer);
    });
}
