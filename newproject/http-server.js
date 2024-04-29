const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  res.end('Divyesh\n');
});

server.listen(4000, "127.0.0.1", () => {
  console.log('Server running at http://127.0.0.1:4000/');
});
