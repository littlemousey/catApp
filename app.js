// Welcome to the server side of the code

var express = require('express');
var request = require('request');
var app = express();


app.use(express.static(__dirname + '/public'));

// GET the root and send status 200( aka OK )
app.get('/', function( req, res ){
  res.send(200)
})

// Make a route for /cat
app.get('/cat', function( req, res ){
	// Go to this url, and give the content of that page to body and pass it along
	request('http://thecatapi.com/api/images/get?format=xml&results_per_page=1', function( error, response, body ){
		// if there are no errors and status is OK run this code
		if (!error && response.statusCode === 200) {
			// Send the body(content) as a response on /cat
   	 		res.send( body );
   	 		// Now we can access it from browser( client side )
  		}
	});
})

// Create server. Hello world example
var server = app.listen(3000, function () {
	
  var host = server.address().address
  var port = server.address().port

  console.log('Cat app listening at http://%s:%s', host, port)

})