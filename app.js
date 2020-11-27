const http = require('http')

// Routes contains everything that was put in module exports from routes.js (read only)
const routes = require('./routes')

console.log(routes.someText)

// Anonymous function 
const server = http.createServer(routes.handler)

// Start the server
server.listen(3000)