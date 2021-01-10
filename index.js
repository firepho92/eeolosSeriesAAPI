const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const routes = require('./routes')
const app = express()
const port = process.env.PORT || 3000

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin)
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    res.header('Access-Control-Allow-Credentials', true)
    next()
})

app.use('/', routes)

mongoose.connect('mongodb+srv://firepho:Auza940220.@cluster0.qlamj.mongodb.net/Eeolos?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {
  if(err) console.log('Error conecting to database: ' + err)
  return true
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
