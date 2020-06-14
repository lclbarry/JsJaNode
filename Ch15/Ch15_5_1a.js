var path = require('path');
var p = path.join('/a/.', './//b/', 'd/../c/');
console.log(p);
var url = '/index.html';
var p2 = path.join(process.cwd(), 'public', url);
console.log(p2);