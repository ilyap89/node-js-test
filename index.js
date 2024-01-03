const http = require('http');
const fs = require('fs');
const path = require('path');
const hostname = '172.31.17.34'; // Make sure to change this to your EC2 private IP
const port = 3000;
const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/index.html') {
        const filePath = path.join(__dirname, 'index.html');
        const readStream = fs.createReadStream(filePath);

        // Set the content type to HTML
        res.setHeader('Content-Type', 'text/html');

        // Pipe the read stream to the response
        readStream.pipe(res);
    } else {
        // Handle other routes or files as needed
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});
server.listen(port, hostname, () => {
 console.log(`Server running at http://${hostname}:${port}/`);
});
