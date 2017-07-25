'use strict';

let MongoClient = require('mongodb').MongoClient;

var dbInfo = {};

if(process.env.MODE === 'prod'){
	dbInfo.DB = process.env.DB;
	dbInfo.PASS = process.env.PASS
	dbInfo.USER = process.env.USER;
	var URI = 'mongodb://' + dbInfo.USER + ':' + dbInfo.PASS + '@sillydb-shard-00-00-cmpur.gcp.mongodb.net:27017,sillydb-shard-00-01-cmpur.gcp.mongodb.net:27017,sillydb-shard-00-02-cmpur.gcp.mongodb.net:27017/' + dbInfo.DB + '?ssl=true&replicaSet=sillydb-shard-0&authSource=admin'
} else {
	dbInfo     = require('./dbInfo.js');
	var URI = 'mongodb://localhost:27017/sillydb';
}

console.log('URI: ', URI);

let DB = {

	connect: function(){
		// connect to sillydb
		return new Promise((resolve, reject) => {
			MongoClient.connect(URI, (err, db) => {
				if (err) {
					reject(err);
				} else {
					resolve(db);
				}
			});
		});
	},

	close: function(db){
		if(db){
			db.close();
		}
	},

	getTools: function(db){
		return new Promise((resolve, reject) => {
			var collection = db.collection('tools');
			collection.find({}).toArray(function(err, res) {
				if(err) {
					reject(err);
				} else {
					resolve(res);
				}
			});
		})
	}

}

module.exports = DB;
