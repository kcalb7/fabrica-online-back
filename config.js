const config = {
	database: {
		protocol: "mongodb+srv:",
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		host: "main.xdv3t.gcp.mongodb.net",
		name: "fabrica_online_api",
	},
};

module.exports = config;
