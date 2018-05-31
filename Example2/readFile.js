// Read .txt file using node file system
var http = require('http');
var fs = require('fs');

http.createServer(function(req, resp){
    fs.readFile('../Resources/test.txt', function(err, data){
        resp.writeHead(200, {'Content-Type':'text/plain'});
        resp.write(data);
        resp.end();
    })
}).listen(8085);

console.log('Server running at 127.0.0.1:8085');
