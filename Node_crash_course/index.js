const http = require('http');
const http = require('path');
const http = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html'});
    res.end('<h1>Home</h1>');
  }
 
});

const PORT = process.env.PORT || 5000;  // checks if port number is available as an environment variable or then defaults to 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));)


