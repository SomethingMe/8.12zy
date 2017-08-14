var fs = require('fs');
var arr = new Array;
var num = fs.readFile(process.argv[2], 'utf-8', function callback(err, data) {
    arr = data.toString().split('\n');
    console.log(arr.length);
});
