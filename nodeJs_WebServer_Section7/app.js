const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  }

  else if (req.url === '/api') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    // let html = fs.readFileSync(__dirname + '/index.html', 'utf8');
    // const message = "Hello from JS code....";
    // html = html.replace('{Message}', message);
    // res.end(html);
    //fs.createReadStream(__dirname + '/index.html').pipe(res);

    // respond with a json rather than html
    const obj = {
      firstname: 'John',
      lastname: 'Doe'
    };
    // done responding with json

    res.end(JSON.stringify(obj));
  }
  else {
    res.writeHead(404);
    res.end();
  }
}).listen(1337, '127.0.0.1');

