// server.js

// BASE SETUP
// =============================================================================

var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var router     = express.Router();

// bodyParser will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

//middleware
app.use(function (req, res, next){
	// redirect for hosted server
	if (req.headers['x-forwarded-proto'] === 'https') {
		res.redirect('http://' + req.hostname + req.url);
	} else {
		next();
	}
});

// routes for /api
// =============================================================================

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our api!' });
});


// register the routes -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// start the server
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);