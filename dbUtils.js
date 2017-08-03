'use strict';

// routines for db setup/maintenance

var trainsData = require('./data/trains.js');
var DB = require('./db.js');

var dbUtils =  {

	loadRailRoads: function(dbc) {
		return new Promise((resolve, reject)=> {
			DB.insertCollection(dbc, 'railroads', trainsData.trains)
				.then(function(res){
					resolve(res.result);
				},function(err){
					reject(err);
				})
		})
	}
}

module.exports = dbUtils;