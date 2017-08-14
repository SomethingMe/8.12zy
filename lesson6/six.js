var sixModule = require('./six-module');
sixModule(process.argv[2], function callback(err, list) {
    if (err) {
        throw err;
    }
    list.forEach(function (file) {
        console.log(file);
    });
});