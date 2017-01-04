var express = require('express')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var multer  = require('multer')
var path = require('path')

var index = require('./routes/index')
var about = require('./routes/about')

var config = require('./config/config');

var app = express()

app.use(express.static(path.join(__dirname,'/statics')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/', index)
app.use('/about', about)

var server = app.listen(config.port, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})
