'use strict';

let MongoClient = require('mongodb').MongoClient;

var dbInfo = {};

if(process.env.MODE === 'prod'){	// remote server and remote mongodb atlas
	dbInfo.DB = process.env.DB;
	dbInfo.PASS = process.env.PASS
	dbInfo.USER = process.env.USER;

	var URI = 'mongodb://' + dbInfo.USER + ':' + dbInfo.PASS + '@sillydb-shard-00-00-cmpur.gcp.mongodb.net:27017,sillydb-shard-00-01-cmpur.gcp.mongodb.net:27017,sillydb-shard-00-02-cmpur.gcp.mongodb.net:27017/' + dbInfo.DB + '?ssl=true&replicaSet=sillydb-shard-0&authSource=admin'
} else {
	if(false){  // run local server, remote mongodb atlas
		dbInfo     = require('./dbInfo.js');
		var URI = 'mongodb://' + dbInfo.USER + ':' + dbInfo.PASS + '@sillydb-shard-00-00-cmpur.gcp.mongodb.net:27017,sillydb-shard-00-01-cmpur.gcp.mongodb.net:27017,sillydb-shard-00-02-cmpur.gcp.mongodb.net:27017/' + dbInfo.DB + '?ssl=true&replicaSet=sillydb-shard-0&authSource=admin'
	} else {	// run local instance of server and db
		var URI = 'mongodb://localhost:27017/sillydb';
	}
}

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
	},

	getRailroads: function(db){
		return new Promise((resolve, reject) => {
			var collection = db.collection('railroads');
			collection.find({}).toArray(function(err, res) {
				if(!err && res.length === 0){
					console.log('ERROR');
					reject({'message': 'no records found'});
				} else if(err) {
					console.log('REAL ERROR');
					reject(err);
				} else {
					resolve(res);
				}
			});
		})
	},

	insertCollection: function(db, coll, data){
		return new Promise((resolve, reject) => {
			var collection = db.collection(coll);
			collection.insertMany(data, function(err,res){
				if(err) {
					reject(err);
				} else {
					resolve(res);
				}
			})
		})
	},
	//  remove all documents in a collection
	cleanCollection: function(db, coll){
		return new Promise((resolve, reject) => {
			var collection = db.collection(coll);
			collection.deleteMany({_id : { $ne : -1} }, function(err,res){
				if(err) {
					reject(err);
				} else {
					resolve(res);
				}
			})
		})
	}


}

module.exports = DB;
