var fs = require("fs");

var data = '';
var newData = 'add to new file: www.runoob.com';

var readerStream = fs.createReadStream('input.txt');
readerStream.setEncoding('UTF8');

readerStream.on('data', function(chunk){
    data +=chunk;
});

readerStream.on('end', function(){
    console.log(data);
});

readerStream.on('error', function(err){
    console.log(err.stack);
})


var writeStream = fs.createWriteStream('output.txt');
// writeStream.write(newData, 'UTF8');
// writeStream.end();

// writeStream.on('finish', function(){
//     console.log('write completed~');
// });

// writeStream.on('error', function (err){
//     console.log(err.stack);
// });

readerStream.pipe(writeStream);


// fs.readFile('input.txt', function (err, data) {
//     if(err) {
//         console.log(err.stack);
//     }

//     console.log(data.toString());
// });


console.log("end~~~");