var five = require("johnny-five");
var board = new five.Board({port:"COM3"});

board.on("ready", function() {
   var led = new five.Led(13);
   var btn = new five.Button(7);
   led.off();
   btn.on("press", function() {
      console.log("按下按鈕...");
      led.on();
   });
   btn.on("release", function() {
      console.log("放開按鈕..." );
      led.off();
   });
});