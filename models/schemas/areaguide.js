
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var areaguide_schema = new Schema(
		    { 
		       areaguide : String
	        }
		);
module.exports = areaguide_schema;