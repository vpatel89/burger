var burgerCRUD = require('./models/burger.js');

var controller = require('./controllers/burgers_controller.js');


burgerCRUD.connectORM();

controller.burgerCtrl();