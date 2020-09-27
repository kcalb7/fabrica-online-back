const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const env = process.env.NODE_ENV || "development";

const config =
	env === "development"
		? require("./config.json")[env]
		: require("./config.js");

const uri = `${config.database.protocol}//${config.database.user}:${config.database.password}@${config.database.host}/${config.database.name}?retryWrites=true&w=majority`;

const user = require("./src/model/user");
const bill = require("./src/model/bill");

class App {
	constructor() {
		this.app;
	}

	init() {
		this.app = express();
		this.app.use(express.json());
		this.app.use(cors());

		mongoose.connect(uri, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: true,
		});

		new user();
		new bill();
		const userRoute = require("./src/route/user");
		const billRoute = require("./src/route/bill");
		new userRoute(this.app);
		new billRoute(this.app);

		this.app.get("/", (req, res) => {
			res.send({ msg: "api ok" });
		});

		this.app.listen(config.port, () => {
			console.log(`API fábrica online running on port ${config.port}....`);
		});
	}
}

new App().init();

module.exports = App;
