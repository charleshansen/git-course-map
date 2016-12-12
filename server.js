var express = require('express')
var app = express()

console.log(`Environment variable FOO=${process.env['FOO']}`)

app.use('/dist', express.static('dist'))
app.get('/', function (req, res) {
  res.sendFile('index.html', {root: __dirname});
})

app.listen(process.env.PORT || 3000, function () {
  console.log('App listening on port 3000!')
})
