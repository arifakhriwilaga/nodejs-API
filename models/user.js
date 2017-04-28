// Export some model methods
const db = require('../config');

exports.all = function(req, res, next) {

  db.connection.query('SELECT * FROM users', function (error, result, fields) {
		res.json({
	  	meta : {
	  		error : '1',
	  		code : 200,
	  		result : 'Default Result',
	  		message : 'Success'
	  	}, 
	  	data : {
	  		users : result
	  	}
	 	});
	})
}

exports.create = function (req, res, next) {
	var data = {
		username : req.body.username,
		email : req.body.email,
		birthday : req.body.birthday,
		password : req.body.password
	}
	res.json(data);

	// console.log(data);
	// db.connection.query('INSERT INTO users (username,email,birthday,password) VALUES ("'+ data.username +'","'+ data.email +'","'+ data.birthday +'","'+ data.password +'")' , function (error, result, fields) {
	// 	if (error) {
 //      console.log("Error inserting : %s ",error );
	// 	} else {
	// 		res.json({
	// 	  	meta : {
	// 	  		error : '1',
	// 	  		code : 200,
	// 	  		result : 'Default Result',
	// 	  		message : 'Success create new user'
	// 	  	}, 
	// 	  	data : {
		  		
	// 	  	}
	// 	 	});
	// 	}

	// })
}

exports.update = function (req, res, next) {
	var data = {
		id : req.body.id,
		username : req.body.username,
		email : req.body.email,
		birthday : req.body.birthday,
		password : req.body.password
	}
	// res.json(data);

	// console.log(data);
	db.connection.query('UPDATE users SET username = "'+ data.username +'", email = "'+ data.email +'", birthday = "'+ data.birthday +'",password = "'+ data.password +'" WHERE id ="'+ data.id +'" ' , function (error, result, fields) {
		if (error) {
      console.log("Error inserting : %s ",error );
		} else {
			res.json({
		  	meta : {
		  		error : '1',
		  		code : 200,
		  		result : 'Default Result',
		  		message : 'Success update data user'
		  	}, 
		  	data : {
		  		
		  	}
		 	});
		}

	})
}

exports.delete = function (req, res, next) {
	var data = { id : req.body.id }
	// res.json(data);

	// console.log(data);
	db.connection.query('DELETE From users WHERE id = "'+ data.id +'"' , function (error, result, fields) {
		if (error) {
      console.log("Error inserting : %s ",error );
		} else {
			res.json({
		  	meta : {
		  		error : '1',
		  		code : 200,
		  		result : 'Default Result',
		  		message : 'Success delete user'
		  	}, 
		  	data : {
		  		
		  	}
		 	});
		}

	})
}