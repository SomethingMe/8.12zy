var http = require('http');
var url = require('url');
var querystring = require('querystring');

http.createServer(function(req,res){
    var obj = url.parse(req.url);
    var param = querystring.parse(obj.query);
    res.writeHead(200, {'Content-Type': 'application/json'});
    if('/api/parsetime' === obj.pathname){
        var date = new Date();
        var str = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        };
        res.end(JSON.stringify(str));
    }
    if('/api/unixtime' === obj.pathname){
        var date = new Date();
        var str = {unixtime: date.getTime()};
        res.end(JSON.stringify(str));
    }
}).listen(process.argv[2]);
