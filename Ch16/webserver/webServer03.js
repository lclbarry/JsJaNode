var http = require('http');
var path = require('path');
var fs = require('fs'); 
var url = require('url');
http.createServer(function(req, res) {
   var localFolder = __dirname + '/public/';
   // 剖析 URL
   var url_parts = url.parse(req.url);
   console.log(url_parts.pathname);
   switch (url_parts.pathname) {   // 處理路由
      case '/':
             fileName = localFolder + "index.html";
             break;
      case '/about': 
             fileName = localFolder + "about.html";
             break;
      default:
             fileName = localFolder + 'page404.html';
             break;
   }
   // 讀取檔案內容
   fs.readFile(fileName, function(err, contents) {
       if (!err) { // 沒有錯誤
           res.writeHead(200, {'Content-Type': 'text/html'});
           res.end(contents);
       } 
       else console.log(err);
   });
}).listen(8080);
console.log("Web伺服器在監聽埠號: 8080....");