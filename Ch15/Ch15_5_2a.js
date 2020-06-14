var fs = require('fs');
fs.exists('public/example.txt', function(exists) {
    if (exists)
       console.log("檔案存在...");
    else
       console.log("檔案不存在...");
});