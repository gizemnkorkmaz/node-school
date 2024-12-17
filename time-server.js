const net = require('net');

const portNumber = process.argv[2];

const server = net.createServer((socket) => {
    const date = new Date();
    const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}\n`;
    socket.end(formattedDate);
    }
);

server.listen(portNumber);