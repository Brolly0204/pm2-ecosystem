const http = require('http');

const HOST_NAME = '0.0.0.0';
const PORT = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Nodejs!\n');
});

server.listen(PORT, HOST_NAME, () => {
  console.log(`Server running at http://${HOST_NAME}:${PORT}/`);
});
