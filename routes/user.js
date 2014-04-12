
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.signin = function(req,res){
	res.render('signin', { title: 'Signin',message: req.flash('loginMessage') });
};

exports.signup = function(req,res){
	res.render('signup', { title: 'Signup' });
};