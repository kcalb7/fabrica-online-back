const mongoose = require("mongoose");

class Bill extends mongoose.Schema {
	constructor() {
		super({
			describe: {
				type: String,
				required: true,
			},
			type: {
				type: String,
				enum: ["Income", "Expense"],
				required: true,
			},
			value: {
				type: Number,
				required: true,
			},
			date: {
				type: Date,
				required: true,
			},
			observation: {
				type: String,
				required: false,
			},
		});

		mongoose.model("bill", this);
	}
}

module.exports = Bill;
