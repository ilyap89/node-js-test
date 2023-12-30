//var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Ilya NodeJS Lab'); //write a response to the client
  res.end(); //end the response
}).listen(3000); //the server object listens on port 80
//
const http = require('http');
const hostname = '172.31.95.38'; // Make sure to change this to your EC2 private IP
const port = 3000;
const server = http.createServer((req, res) => {
 res.statusCode = 200;
 res.setHeader('Content-Type', 'text/plain');
 res.end('Hello World from BackSpace Academy!');
});
server.listen(port, hostname, () => {
 console.log(`Server running at http://${hostname}:${port}/`);
});
