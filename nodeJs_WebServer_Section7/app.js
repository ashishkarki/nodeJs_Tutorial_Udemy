const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  // let html = fs.readFileSync(__dirname + '/index.html', 'utf8');
  // const message = "Hello from JS code....";
  // html = html.replace('{Message}', message);
  // res.end(html);
  fs.createReadStream(__dirname + '/index.html').pipe(res);
}).listen(1337, '127.0.0.1');

