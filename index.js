const express = require('express')
const { default: pool } = require('./connection')

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('About Us')
})

app.get('/users', (req, res) => {
  res.json([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ])
})

app.get('/hora', async (req, res) => {
  const result = pool.query('SELECT NOW()')
  res.json(result.rows)
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
