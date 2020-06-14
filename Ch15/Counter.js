var util = require("util");
var EventEmitter = require("events").EventEmitter;
module.exports = Counter;
function Counter(name) {
    this.name = name;
    this.count = 0;
}
util.inherits(Counter, EventEmitter);
Counter.prototype.add = function () {
    this.count = this.count + 1;
    this.emit('inc', this.name, this.count);
}