const express = require('express')
// Routes contains everything that was put in module exports from routes.js (read only)

const app = express()

// Add a new middleware function(s)
app.use('/add-product', (req, res, next) => {
  console.log('In another middleware')
  res.send('<h1>The "Add Product" Page</h1>')
})

app.use('/', (req, res, next) => {
  console.log('In another middleware')
  res.send('<h1>Hello from Express!</h1>')
})

app.listen(3000)