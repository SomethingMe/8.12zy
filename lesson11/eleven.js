var http = require('http');
var fs = require('fs');
var port = process.argv[2];
var path = process.argv[3];
var server = http.createServer(function (req, res) {
    res.writeHead(200, {'content-type': 'text/plain;charset=utf-8'});
    fs.createReadStream(path).pipe(res);
}).listen(port);