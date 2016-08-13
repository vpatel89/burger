// var connectMySQL = function() {
	var mysql      = require('mysql');
	var connectMySQL = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : '',
		database : 'burgers_db'
	});

	connectMySQL.connect(function(err) {
		if (err) {
			console.error('error connecting: ' + err.stack);
			return;
		};
		console.log('connected as id ' + connectMySQL.threadId);
	});
// }

module.exports = connectMySQL;