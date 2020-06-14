var five = require("johnny-five");
var board = new five.Board({port:"COM3"});

board.on("ready", function() {
   var piezo = new five.Piezo(5);

   function song() {
      piezo.play({
        song: [
         ["C4", 1 / 4],
         ["D4", 1 / 4],
         ["F4", 1 / 4],
         ["D4", 1 / 4],
         ["A4", 1 / 4],
         [null, 1 / 4],
         ["A4", 1],
         ["G4", 1],
         [null, 1 / 2],
         ["C4", 1 / 4],
         ["D4", 1 / 4],
         ["F4", 1 / 4],
         ["D4", 1 / 4],
         ["G4", 1 / 4],
         [null, 1 / 4],
         ["G4", 1],
         ["F4", 1],
         [null, 1 / 2]
       ],
       tempo: 100
      });
   }
   song();
   this.loop(5000, song);
});
