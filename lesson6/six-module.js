var fs = require('fs');
var str = "\." + process.argv[3] + "$";
var reg = new RegExp(str);
module.exports = function (path, callback) {
    fs.readdir(path, function (err, list) {
        if (err) {
            return callback(err);
        }
        list = list.filter(function(file) {
            if (reg.test(file)){
                return file;
            }
        });
        callback(null, list);
    });
};