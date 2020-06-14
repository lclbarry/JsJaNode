var Counter = require("./Counter");
var c = new Counter("A");
c.on('inc', function (name, count) {
    console.log("計數器: " + name + "/" + count);
});
c.add();
c.add();
c.add();
