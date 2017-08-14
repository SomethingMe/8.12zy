var http = require('http');
var bl = require('bl');
var urlList = process.argv.slice(2);
var dataList = [];
urlList.forEach(function (url, index) {
    http.get(url, function (response) {
        response.setEncoding('utf8');
        response.pipe(bl(function (err, data) {
            dataList.push(data.toString());
            console.log(dataList.length);
            if (dataList.length == urlList.length) {
                dataList.forEach(function (data) {
                    console.log(data);
                });
            }
        }));
        response.on('error', function (err) {
            throw err;
        });
    });
});