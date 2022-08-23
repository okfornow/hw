var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/routes', function (req, res) {
  res.send('packages')
})  

app.get('/routes', function (req, res) {
  res.send('settings')
})  
app.listen(3000, function () {
  console.log('Listening on port 3000...')
})
