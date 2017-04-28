// set database
const MySQL = require('mysql');
exports.connection = MySQL.createConnection({
	host: 'localhost',
	user: 'root',
	password : 'Handsome100',
	database : 'exercise_node_js'
})