var fs = require('fs');
fs.stat('public/example.txt', function(err, stats) {
   if (err) throw err;
   console.log("是否是檔案： " + stats.isFile());
   console.log("是否是目錄： " + stats.isDirectory());
   console.log("是否是區塊裝置： " + stats.isBlockDevice());
   console.log("是否是字元裝置： " + stats.isCharacterDevice());
   console.log("是否是符號連接： " + stats.isSymbolicLink());
   console.log("是否是網域Socket： " + stats.isSocket());
});