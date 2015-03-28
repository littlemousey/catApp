var express = require('express');
var request = require('request');
var app = express();


app.use(express.static(__dirname + '/public'));

app.get('/', function( req, res ){
  res.send(200)
})

app.get('/cat', function( req, res ){
	request('http://thecatapi.com/api/images/get?format=xml&results_per_page=1', function(error, response, body){
		if (!error && response.statusCode === 200) {
   	 		res.send( body );
  		}
	});
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})