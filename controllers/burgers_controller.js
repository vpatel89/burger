var controller = {
	burgerCtrl: function() {
		var express = require('express');
		var bodyParser = require('body-parser');
		var methodOverride = require('method-override');
		var exphbs = require('express-handlebars');
		var connectMySQL = require('../config/connection.js');
		var connectORM = require('../config/orm.js')

		var app = express();

		// Serve static content for the app from the "public" directory in the application directory.
		app.use(express.static(process.cwd() + '/public'));

		// parse application/x-www-form-urlencoded
		app.use(bodyParser.urlencoded({
			extended: false
		}));

		// override with POST having ?_method=DELETE
		app.use(methodOverride('_method'));
		app.engine('handlebars', exphbs({
			defaultLayout: 'main'
		}));
		app.set('view engine', 'handlebars');


		app.get('/', function (req, res) {
			connectMySQL.query('SELECT * FROM burgers', function (err, results) {
				if (err) {
					throw err;
				}

				var eatMe = [];
				var devouredBurg = [];

				for (var i = 0; i < results.length; i++) {
					if (!results[i].devoured) {
						eatMe.push(results[i]);
					} else {
						devouredBurg.push(results[i]);
					}
				}

				res.render('index', {
					burgers: eatMe,
					eaten: devouredBurg
				});
			});
		});


		app.put('/burgers/:id/update', function (req, res) {
			connectORM.updateOne();
			res.redirect('/');
		});


		var port = 3000;
		app.listen(port, function () {
			console.log('Listening on PORT ' + port);
		});
	}
}

module.exports = controller;