var fs = require('fs');
var num = fs.readFileSync(process.argv[2],'utf-8').toString();
var arr = num.split('\n');
console.log(arr.length);