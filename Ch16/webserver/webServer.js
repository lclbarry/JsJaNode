var http = require('http');
http.createServer(function (req, res) {
   res.writeHead(200, { 'Content-Type': 'text/plain' });
   res.end('Hello, world!\n');
}).listen(8080);
console.log("Web伺服器在監聽埠號: 8080....");