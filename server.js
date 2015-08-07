// REQUIRED PACKAGES
// ===============================================
var express = require('express');
var app		= express();
var ig		= require('instagram-node').instagram();

// APP CONFIGURATION
// ===============================================
// tell node where to look for site resources
app.use(express.static(__dirname + '/public'));

// set the view engine to ejs
app.set('view engine', 'ejs');

// Configure instagram app with client-id
ig.use({
	client_id: '63a501460efb4d588337cae09e2f8ca2',
	client_secret: '7e9b5f8ea9774297b0379ea0d0103338'
});


// SET THE ROUTES
// ===============================================
// home page route - popular images
app.get('/', function(req, res) {

	// use the instagram packages to get popular data
	// render the home page and pass it the popular images
	ig.media_popular(function(err, medias, remaining, limit) {
		res.render('pages/index', {grams: medias});	
	});

});

// START THE SERVER
// ================================================
app.listen(3000);
console.log('App started at http://localhost:3000');
