var http = require('http');
var path = require('path');
var fs = require('fs'); 
http.createServer(function(req, res) {
   var localFolder = __dirname + '/public/';
   var fileName = localFolder + (path.basename(req.url) || 'index.html');
   var page404 = localFolder + 'page404.html'; 
   fs.exists(fileName, function(exists) {
      if (exists) { // 檔案存在
         // 讀取檔案內容
         fs.readFile(fileName, function(err, contents) {
            if (!err) { // 沒有錯誤
               res.writeHead(200, {'Content-Type': 'text/html'});
               res.end(contents);
            } 
            else console.log(err);
         });
      }
      else {  // 檔案不存在
         fs.readFile(page404, function(err, contents){
            if(!err){
               res.writeHead(404, {'Content-Type': 'text/html'});
               res.end(contents);
            }
            else console.log(err);
         });
      }
   });
}).listen(8080);
console.log("Web伺服器在監聽埠號: 8080....");