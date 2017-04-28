var express = require('express')
		, router = express.Router()
		, user = require('../models/user')
		, http = require('http');

/* Define routes handling profile requests */ 
// get all user
router.get('/all',function(req, res, next){
	var headerAccessToken = JSON.stringify(req.headers['access_token']);
	var headerApiKey = JSON.stringify(req.headers['api_key']);
	
	if (headerAccessToken == undefined || headerApiKey == undefined) {
		resError(res,next,500);
	
	} else {
	  user.all(req, res, next);
	}
})

// create new user
router.post('/',function(req, res, next){
	var headerAccessToken = JSON.stringify(req.headers['access_token']);
	var headerApiKey = JSON.stringify(req.headers['api_key']);
	
	// var dataInput = JSON.stringify(req.body);
	// res.json(req.body)
	
	if (headerAccessToken == undefined || headerApiKey == undefined) {
		resError(res,next,500);
	
	} else {
	  user.create(req, res, next);
	}
	
})


// update user
router.put('/',function(req, res, next){
	var headerAccessToken = JSON.stringify(req.headers['access_token']);
	var headerApiKey = JSON.stringify(req.headers['api_key']);
	
	// var dataInput = JSON.stringify(req.body);
	// res.json(req.body)
	
	if (headerAccessToken == undefined || headerApiKey == undefined) {
		resError(res,next,500);
	
	} else {
	  user.update(req, res, next);
	}
	
})

// delete user
router.delete('/',function(req, res, next){
	var headerAccessToken = JSON.stringify(req.headers['access_token']);
	var headerApiKey = JSON.stringify(req.headers['api_key']);
	
	// var dataInput = JSON.stringify(req.body);
	// res.json(req.body)
	
	if (headerAccessToken == undefined || headerApiKey == undefined) {
		resError(res,next,500);
	
	} else {
	  user.delete(req, res, next);
	}
	
})
var resError = function(res,next,code) {
	// var status = res.status(code);
	var message;
	try {
		if (code == 500) {
			message = "Internal server error.";
		} else if (code == 400) {
			message = "Server error 400.";
		} else if (code == 403) {
			message = "Server error 403.";
		} else if (code == 404) {
			message = "Server error 404";		
		} else {
			message = "Success";
		}
	} finally {
	  res.json({
	  	meta : {
	  		error : '1',
	  		code : code,
	  		result : 'Default Result',
	  		message : message
	  	}, 
	  	data : {}
	 	});
	}
	res.end()
}

module.exports = router