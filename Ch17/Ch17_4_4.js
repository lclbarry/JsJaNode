var five = require("johnny-five");
var board = new five.Board({port:"COM3"});
var pot;

board.on("ready", function() {
   var led = new five.Led(11);
   pot = new five.Sensor({
       pin:"A0",
       freq: 250
   });
   pot.on("change", function(){
       var value = this.raw;   
       led.brightness(Math.floor(value/4));
   });
});
