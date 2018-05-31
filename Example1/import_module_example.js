var http = require('http')
var me = require('./module_example1')

http.createServer(function(request, response){
    response.writeHead(200,{'Content-Type':'application:json'});
    response.end(me.showDateTime());
    response.end();
}).listen(8084);

console.log('Server running at 127.0.0.1:8084')