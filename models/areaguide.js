// app/models/user.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var areaGuide = require('./schemas/areaguide');


// create the model for users and expose it to our app
module.exports = mongoose.model('AreaGuide', areaGuide);

