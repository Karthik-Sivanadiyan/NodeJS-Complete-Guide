const http = require('http')
// Store functionality of filesystem package in a constant named fs 
const fs = require('fs')

// Anonymous function 
const server = http.createServer((req, res) => {
  const url = req.url
  const method = req.method
  // Recall that triple equals checks both type and value
  if (url === '/') {
    res.write('<html>')
    res.write('<head><title>Enter Message</title></head>')
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
    res.write('</html>')
    // return out of the annonymous function and do no execute code outside the if block
    return res.end()
  }

  if (url === '/message' && method === 'POST') {
    const body = [];

    req.on('data', (chunk) => {
      console.log(chunk)
      body.push(chunk)
    })

    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString()
      console.log(parsedBody)
      const message = parsedBody.split('=')[1]
      fs.writeFileSync('message.txt', message)
    })

    res.statusCode = 302
    res.setHeader('Location', '/')
    return res.end()
  }
  res.setHeader('Content-Type', 'text/html')
  res.write('<html>')
  res.write('<head><title>My First Page </title></head>')
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>')
  res.write('</html>')
  res.end()
})

// Start the server
server.listen(3000)