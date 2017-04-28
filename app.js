var express = require('express')
  , app = express()
  , bodyParser = require('body-parser')
  // , config = 
  , port = process.env.PORT || 3000

app.set('views', __dirname + '/views')
app.engine('jade', require('jade').__express)
app.set('view engine', 'jade')

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(require('./controllers'))

// app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// costum config database
// app.use(require('./config'))

app.listen(port, function() {
  console.log('Listening on port ' + port)
})