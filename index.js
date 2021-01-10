const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const routes = require('./routes')
const app = express()
const port = process.env.PORT || 8080

app.use(cors())
app.use(morgan('combined'))

app.use('/', routes)

mongoose.connect('mongodb+srv://firepho:Auza940220.@cluster0.qlamj.mongodb.net/Eeolos?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {
  if(err) console.log('Error conecting to database: ' + err)
  return true
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
