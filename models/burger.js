var burgerCRUD = {
	connectORM: function() {
		var connectORM = require('../config/orm');

		connectORM.connectMySQL();
	},
	selectAll: function(allBurg) {
		connectORM.selectAll(function(res) {
			allBurg(res);
		});
	},
	insertOne: function(oneBurg) {
		connectORM.insertOne(oneBurg);
	},
	updateOne: function(updateBurg) {
		connectORM.updateOne(updateBurg);
	}
}

module.exports = burgerCRUD;