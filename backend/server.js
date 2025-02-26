const http = require("http");
const { initializeSocket } = require("./config/socket");

const server = http.createServer();

const port = 3000;

initializeSocket(server);

server.listen(port, () => {
    console.log("Server is started")
})