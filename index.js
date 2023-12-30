const http = require('http');
const hostname = '172.31.17.34'; // Make sure to change this to your EC2 private IP
const port = 3000;
const server = http.createServer((req, res) => {
 res.statusCode = 200;
 res.setHeader('Content-Type', 'text/plain');
 res.end('Hello World from Ilya Test Lab!');
});
server.listen(port, hostname, () => {
 console.log(`Server running at http://${hostname}:${port}/`);
});
