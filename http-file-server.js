const http = require("http");
const fs = require("fs");

const portNumber = process.argv[2];
const filePath = process.argv[3];

const src = fs.createReadStream(filePath);

const server = http.createServer((request, response) => {
  response.writeHead(200, { "content-type": "text/plain" });
  src.pipe(response);
});

server.listen(portNumber);
