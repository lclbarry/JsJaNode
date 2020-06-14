var fs = require("fs");
fs.writeFile('helloword.txt', "陳會安", "utf8", function (err) {
    if (err) {
        return console.log(err);
    }
    else {
        console.log("成功寫入檔案：helloword.txt");
    }    
});