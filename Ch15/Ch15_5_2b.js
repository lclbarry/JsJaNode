var fs = require("fs");
fs.readFile('public//example.txt', "utf8", function (err, data) {
    if (err) {
        return console.log(err);
    }
    console.log(data.toString());
});