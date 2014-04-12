
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user_schema = new Schema(
		    { 
		    	local : {
		            firstname : String,
		            lastname  : String,
		            gender    : Number,
		            from      : String,
		            username  : String,
		            email     : String,
		            password  : String,
		        }
	        }
		);
module.exports = user_schema;