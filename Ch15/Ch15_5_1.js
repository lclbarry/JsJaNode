var path = require('path');
var p = path.normalize('/a/.///b/d/../c/');
console.log(p);