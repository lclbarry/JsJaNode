var http = require('http');
var path = require('path');
var url = require('url');
var five = require("johnny-five");
var board = new five.Board({port:"COM3"});
var state0, state1;

board.on("ready", function() {
   var led0 = new five.Led(13);
   var led1 = new five.Led(12); 
   http.createServer(function(req, res) {
      // 剖析 URL
      var url_parts = url.parse(req.url);
      console.log(url_parts.pathname);
      switch (url_parts.pathname) {   // 處理路由
         case '/':
               led0.off();
               led1.off();
               state0 = "Off";
               state1 = "Off";
               break;
         case '/0': 
               if (state0 == "Off") {
                  led0.on();
                  state0 = "On";
               }
               else {
                  led0.off();
                  state0 = "Off";
               }
               break;
         case '/1': 
               if (state1 == "Off") {
                  led1.on();
                  state1 = "On";
               }
               else {
                  led1.off();
                  state1 = "Off";
               }
               break;
     }
     res.writeHead(200, {'Content-Type': 'text/html'});
     res.end(html(state0, state1));
  }).listen(8080);
  console.log("Web伺服器在監聽埠號: 8080....");
});

function html(s0, s1) {
   var res;
   res = "<!DOCTYPE html>";
   res += "<html><head>";
   res += "<meta charset='utf-8'/>";
   res += "<script>";
   res += "function changed(led) {";
   res += "    window.location.href='/' + led";  
   res += "}";
   res += "</script><head><body>";
   res += "<h1>使用Web介面控制Arduino開發板</h1>";   
   res += "<h2>LED 0: " + s0 + "</h2>";
   res += "<h2>LED 1: " + s1 + "</h2>";
   res += "<input type='button' onClick='changed(0)'";
   res += " value='LED 0'/> | ";
   res += "<input type='button' onClick='changed(1)'";
   res += " value='LED 1'/>";
   res += "</body></html>"
   return res;
}
