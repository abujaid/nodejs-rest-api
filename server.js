const http = require('http');
const app = require('./app');

const port = process.env.PORT || 5000; // enviroment varible

const server = http.createServer(app);

server.listen(port);

