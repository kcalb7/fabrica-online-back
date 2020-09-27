const mongoose = require("mongoose");

class User extends mongoose.Schema {
	constructor() {
		super({
			name: {
				type: String,
				required: true,
			},
			username: {
				type: String,
				required: true,
			},
			password: {
				type: String,
				required: true,
			},
			email: {
				type: String,
				required: true,
			},
			active: {
				type: Boolean,
				required: true,
			},
		});

		mongoose.model("user", this);
	}
}

module.exports = User;
