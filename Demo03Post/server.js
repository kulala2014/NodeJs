var http = require("http");
var url = require("url");

function start(route, handle){
    function onRequest(request, response){
        var postData = "";

        var pathName = url.parse(request.url).pathname;
        console.log("Reqeust for:"+pathName + "received.");

        request.setEncoding("utf8");

        request.addListener("data", function(postDataChunk) {
            postData += postDataChunk;
            console.log("Received Post data chunk '" + postDataChunk +"'.");
        });

        request.addListener("end",function(){
            route(handle, pathName,response,postData);
        });
    }
    http.createServer(onRequest).listen(8888);
    
    console.log("Server has started.");
}
exports.start=start;