var connectORM = {
	connectMySQL: function() {
		var connectMySQL = require('./connection');

		connectMySQL;
	},
	selectAll: function(allBurgers) {
		connectMySQL.query('SELECT * FROM burgers', function(err, res) {
			if (err) {
				throw err;
			}
			allBurgers(res);
		});
	},
	insertOne: function(burger) {
		connectMySQL.query('INSERT INTO burgers SET ?', {
			burger_name: burger
		}, function(err, res) {
			if (err) {
				throw err;
			}
		});
	},
	updateOne: function(eatenBurg) {
		connectMySQL.query('UPDATE burgers SET ? Where ?', [{
			devoured: true
		}, {
			id: eatenBurg
		}], function(err, res) {
			if (err) {
				throw err;
			}
		});
	}
}


module.exports = connectORM;