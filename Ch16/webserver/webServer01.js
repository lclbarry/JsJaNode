var http = require("http");
var server = http.createServer(function(req, res) {
  res.writeHead(200, {"Content-Type": "text/html"});
  res.write("<!DOCTYPE html>");
  res.write("<html>");
  res.write("<head>");
  res.write("<meta charset='utf-8'/>");
  res.write("<title>index.html</title>");
  res.write("</head>");
  res.write("<body>");
  res.write("<p>我的個人首頁!</p>");
  res.write("</body>");
  res.write("</html>");
  res.end();
});
server.listen(8080);
console.log("Web伺服器在監聽埠號: 8080....");