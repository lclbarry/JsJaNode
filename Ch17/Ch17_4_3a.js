var five = require("johnny-five");
var board = new five.Board({port:"COM3"});

board.on("ready", function() {
   var led = new five.Led(11);

   function bright() {
      led.brightness(0);
      led.fade(255, 3500, function(){
         led.brightness(0);
      });
   }
   bright();
   this.loop(4000, bright);
});
