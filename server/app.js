const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
var request = require( 'request' );


const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get( '/posts', function( req, res ) {

  var url = 'https://jsonplaceholder.typicode.com/posts';
  
  request({
    url: url,
    method: 'GET'
  }, function (err, body, response) {
    res.send(response) 
  });
});

app.get( '/', function( req, res ) {
  res.send('hello world') 
});

app.listen(process.env.PORT || 8081)

module.exports = app;