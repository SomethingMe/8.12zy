var fs = require('fs');
var str = "\." + process.argv[3] + "$"
var reg = new RegExp(str);
var num = fs.readdir(process.argv[2], function callback(err, list) {
    list.forEach(function (file) {
        if (reg.test(file)) {
            console.log(file);
        }
    })
});