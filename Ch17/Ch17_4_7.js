var five = require("johnny-five");
var board = new five.Board({port:"COM3"});
var pot;

board.on("ready", function() {
   var servo = new five.Servo(7);
   pot = new five.Sensor({
       pin:"A0",
       freq: 250
   });
   pot.on("change", function(){
       console.log(this.raw);
       var value = this.raw;   
       servo.to(Math.floor(value/5.689));
   });
});
