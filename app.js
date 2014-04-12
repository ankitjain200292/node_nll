
/**
 * Module dependencies.
 */

var express = require('express');

var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
var passport = require('passport');
var flash 	 = require('connect-flash');
var configDB = require('./config/database.js');
var engine = require('ejs-locals')

// configuration ===============================================================
	mongoose.connect(configDB.url); // connect to our database
require('./config/passport')(passport); // pass passport for configuration
var app = express();

// all environments
app.set('port', process.env.PORT || 3000 );
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser()); // read cookies (needed for auth)
//for password
app.use(express.session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

require('./routes/route.js')(app, passport); // load our routes and pass in our app and fully configured passport


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
