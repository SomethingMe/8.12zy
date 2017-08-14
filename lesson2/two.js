var count = 0;
var arr = process.argv;
for (var i = 2 ; i < arr.length ; i ++) {
    count += +arr[i];
}
console.log(count);