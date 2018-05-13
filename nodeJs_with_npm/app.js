const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type' : 'text/plain'});
  res.end('some plain text using nodemon...something more');
}).listen(1330, '127.0.0.1');