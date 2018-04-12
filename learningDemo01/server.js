var http = require("http");
var fs = require("fs");
var url = require("url");

// var events = require('events');
// var eventEmitter = new events.eventEmitter();
// eventEmitter.on('eventName', eventhandler);
// // var data = fs.readFileSync('input.txt');
// // console.log(data.toString());
// // console.log("read file end");


// fs.readFile( 'input.txt', function (err, data){
//     if(err) return console.error(err);
//     console.log(data.toString());
// });
// console.log("read file end");

http.createServer(function (request, response) {
    //http header
    //http status 200
    //contentType
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    response.writeHead(200, {'Content-Type' : 'text/plain'})

    //resopnse data
    response.end('Hello World\n')
}).listen(8888,function(){
    console.log('Server running at http:\\127.0.0.1:8888');
});