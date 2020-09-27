const userController = require("../controller/user");

class UserRoute {
	constructor(app) {
		app
			.route("/users")
			.get(userController.listAll)
			.post(userController.add)
			.put(userController.edit);
		// .delete(userController.delete);
	}
}

module.exports = UserRoute;
