var five = require("johnny-five");
var board = new five.Board({port:"COM3"});

board.on("ready", function() {
   var led = new five.Led(11);
   var light = new five.Light("A1");
   light.on("change", function() {
       console.log(this.level);
       if (this.level < 0.65) {
           led.on();
       }
       else {
           led.off();
       }
   });   
});
