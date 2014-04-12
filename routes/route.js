// app/routes.js

var user = require('./user');
var routes = require('./index');
var AreaGuide  = require('../models/areaguide');
module.exports = function(app, passport) {
	
	app.get('/', routes.index);
	app.get('/signin' , user.signin);
	app.get('/signup' , user.signup);
	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect : '/signin', // redirect to the secure profile section
		failureRedirect : '/signup', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));
	
	// process the login form
	app.post('/login', passport.authenticate('local-login', {
		successRedirect : '/', // redirect to the secure profile section
		failureRedirect : '/signin', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));

	// process the areaguide
	app.get('/areaguide', function(req,res) {
		AreaGuide.find({},function(err, records){
			res.render('areaguide', {
                "arealist" : records,
                "title"     : "AreaGuide"
            });
	});
	});

	// route middleware to make sure a user is logged in
	function isLoggedIn(req, res, next) {

		// if user is authenticated in the session, carry on 
		if (req.isAuthenticated())
			return next();

		// if they aren't redirect them to the home page
		res.redirect('/');
	}

}

