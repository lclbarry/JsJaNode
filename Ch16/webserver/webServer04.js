var http = require('http');
var path = require('path');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
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
      case '/form': 
             fileName = localFolder + "form.html";
             break;
      case '/url': 
             fileName = ""; 
             if ( req.method == "POST" ) {  // 表單處理
                var body = "";
                req.on("data", function(chunk) {  // 取得傳遞的資料
                   body += chunk;
                }); 
                req.on("end", function() {
                   res.writeHead(200, {'Content-Type': 'text/html'});
                   // 輸出HTML網頁
                   res.write("<!DOCTYPE html>");
                   res.write("<html>");
                   res.write("<head>");
                   res.write("<meta charset='utf-8'/>");
                   res.write("<title>url.html</title>");
                   res.write("</head>");
                   res.write("<body>");
                   res.write("<p>Content-Type: " + req.headers["content-type"] + "</p>"
                             + "<p>表單資料: </p><pre>" + body + "</pre><br/>");
                   res.write("<p>你的姓名: <b>" + qs.parse(body).name + "</b></p>");
                   res.write("</body>");
                   res.write("</html>");
                   res.end();
                });
             }
             else
                fileName = localFolder + 'page404.html';  // 不是POST方法
             break;
      default:
             fileName = localFolder + 'page404.html';
             break;
   }
   if ( fileName != "" ) {  // 讀取檔案內容      
      fs.readFile(fileName, function(err, contents) {
         if (!err) { // 沒有錯誤
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(contents);
         } 
         else console.log(err);
      });
   }
}).listen(8080);
console.log("Web伺服器在監聽埠號: 8080....");