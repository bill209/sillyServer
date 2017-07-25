// server.js

// BASE SETUP
// =============================================================================

var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var router     = express.Router();
var dbInfo     = require('./db.js');

const URI = 'mongodb://' + dbInfo.USER + ':' + dbInfo.PASS + '@sillydb-shard-00-00-cmpur.gcp.mongodb.net:27017,sillydb-shard-00-01-cmpur.gcp.mongodb.net:27017,sillydb-shard-00-02-cmpur.gcp.mongodb.net:27017/' + dbInfo.DB + '?ssl=true&replicaSet=sillydb-shard-0&authSource=admin'


var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb://kay:myRealPassword@mycluster0-shard-00-00-wpeiv.mongodb.net:27017,mycluster0-shard-00-01-wpeiv.mongodb.net:27017,mycluster0-shard-00-02-wpeiv.mongodb.net:27017/admin?ssl=true&replicaSet=Mycluster0-shard-0&authSource=admin";
MongoClient.connect(URI, function(err, db) {
	console.log('connected successfully to ' + dbInfo.DB);
	db.close();
});


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