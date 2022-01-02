
console.log('hello')
const express = require('express')
const bodyParser = require('body-parser') // parse json
const cors = require('cors') // allows any client to hit the server -- not secure
const morgan = require('morgan') // logging

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/register', (req, res) => {
  res.send({
    message: `Hello ${req.body.email} Your user was registerd.`
  })
})

app.listen(process.env.PORT || 8081)
