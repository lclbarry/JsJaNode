var fs = require("fs");
fs.readFile('public//example.txt', function (err, data) {
    console.log(data.toString());
});
console.log("正在讀取檔案....");