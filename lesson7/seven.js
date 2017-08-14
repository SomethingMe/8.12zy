var http = require('http');
http.get(process.argv[2],function callback(response) {
    response.setEncoding('utf-8');
    response.on('data',function(data){
        console.log(data);
    });
    response.on('err', function (err) {
        throw err;
    });
    response.on('end', function (end) {
    //    Unused parameter end
    //    无法使用 end 参数
        console.log(end);
    });
});