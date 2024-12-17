const http = require("http");

const portNumber = process.argv[2]; 

const server = http.createServer((request, response) => {
    const url = new URL(request.url, `http://${request.headers.host}`);
    const iso = url.searchParams.get("iso");
    const date = new Date(iso);
    const result = {};
    if (url.pathname === "/api/parsetime") {
        result.hour = date.getHours();
        result.minute = date.getMinutes();
        result.second = date.getSeconds();
    } else if (url.pathname === "/api/unixtime") {
        result.unixtime = date.getTime();
    }
    response.writeHead(200, { "content-type": "application/json" });
    response.end(JSON.stringify(result));
}
);

server.listen(portNumber);