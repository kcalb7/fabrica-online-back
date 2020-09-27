const mongoose = require("mongoose");
const user = mongoose.model("user");

class UserController {
	static async listAll(req, res) {
		try {
			res.status(200).json(await user.find());
		} catch (error) {
			console.log(`/user listAll: ${error}`);
			res.status(500).send({ error: `Error: ${error}` });
		}
	}
	static async add(req, res) {
		try {
			let newUser = req.body;
			res.status(201).json(await user.create(newUser));
		} catch (error) {
			console.log(`/user add: ${error}`);
			res.status(500).send({ error: `Error: ${error}` });
		}
	}
	static async edit(req, res) {
		try {
			let editUser = req.body;
			res.status(200).json(await user.findByIdAndUpdate(editUser.id, editUser));
		} catch (error) {
			console.log(`/user edit: ${error}`);
			res.status(500).send({ error: `Error: ${error}` });
		}
	}
}

module.exports = UserController;
