var EventEmitter = require("events").EventEmitter;
var e = new EventEmitter();
e.on('myevent', function () {
    console.log("呼叫事件的回撥函數...");
});
e.emit('myevent');