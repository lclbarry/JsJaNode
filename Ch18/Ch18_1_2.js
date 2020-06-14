var http = require('http');
var path = require('path');
var fs = require('fs'); 
var url = require('url');
var five = require("johnny-five");
var board = new five.Board({port:"COM3"});
var pot, value = 0;

board.on("ready", function() {
   pot = new five.Sensor({
       pin:"A0",
       freq: 250
   });
   
   http.createServer(function(req, res) {
     var localFolder = __dirname + '/public/';
     // 剖析 URL
     var url_parts = url.parse(req.url);
     console.log(url_parts.pathname);
     switch (url_parts.pathname) {   // 處理路由
      case '/':
         fileName = localFolder + "main.html";
         // 讀取檔案內容
         fs.readFile(fileName, function(err, contents) {
            if (!err) { // 沒有錯誤
               res.writeHead(200, {'Content-Type': 'text/html'});
               res.end(contents);
            } 
            else console.log(err);
         });
         break;
      case '/pot':
         pot.on("change", function(){
            value = this.raw;   
         }); 
         res.writeHead(200, {'Content-Type': 'text/plain'});
         res.end(value.toString());          
         break;
     }
   }).listen(8080);
   console.log("Web伺服器在監聽埠號: 8080....");    
});


