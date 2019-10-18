var http = require('http');

var server = http.createServer(function(request, response){
  console.log('Got a request!');
  response.write('Hi!');
  response.end();
});

server.listen(3000);