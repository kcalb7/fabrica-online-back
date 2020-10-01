const billController = require("../controller/bill");

class BillRoute {
	constructor(app) {
		app
			.route("/bills")
			.get(billController.listAll)
			.post(billController.add)
			.put(billController.edit);
		app.route("/bills/:id").delete(billController.delete);
	}
}

module.exports = BillRoute;
