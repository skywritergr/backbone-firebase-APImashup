// DEPENDENCIES
// ============
var express = require("express"),
    http = require("http"),
    port = (process.env.PORT || 8001),
    server = module.exports = express(),
    fs = require("fs");

// SERVER CONFIGURATION
// ====================
server.configure(function() {

    server.use(express["static"](__dirname + "/../app/"));

    server.use(express.errorHandler({

        dumpExceptions: true,

        showStack: true

    }));

    server.use(express.bodyParser());

    server.use(server.router);
});

// SERVER
// ======

// Start Node.js Server
http.createServer(server).listen(port, function() {
    fs.writeFile(__dirname + '/start.log', 'started');
});

console.log('Server started. Go to localhost:8001.');
