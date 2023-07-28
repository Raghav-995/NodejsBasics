var http=require("http");
http.createServer(function(request,response){
response.writeHead(200,{"Content-Type":"plain/text"});
response.end("Hello Raghav Its my first NODE.JS PROJECT :) ");
}).listen(8081);
console.log('Server running at http://127.0.0.1:8081/'); 
