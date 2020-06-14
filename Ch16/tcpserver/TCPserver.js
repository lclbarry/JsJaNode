var net = require('net');
var HOST = '127.0.0.1'; // 主機位址
var PORT = 6969;        // 埠號
// 建立伺服器
server = net.createServer(function(conn) {    
    // 顯示連線資訊
    console.log('建立連線: ' + conn.remoteAddress +':'+ conn.remotePort);
    // data事件處理
    conn.on('data', function(data) {
        console.log('取得資料 ' + conn.remoteAddress + ': ' + data);
        // 寫入資料至客戶端
        conn.write('回應資料: "' + data + '"');        
    });
    // close事件處理
    conn.on('close', function(had_error) {
        if (had_error) console.log('連線有錯誤...');
        else console.log('連線關閉...');
    });    
});
server.listen(PORT, HOST, function() {
    console.log('伺服器監聽... ' + HOST +':'+ PORT);
});