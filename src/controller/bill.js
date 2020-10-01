const mongoose = require("mongoose");
const bill = mongoose.model("bill");

class BillController {
	static async listAll(req, res) {
		try {
			res.status(200).json(await bill.find());
		} catch (error) {
			console.log(`/bill listAll: ${error}`);
			res.status(500).send({ error: `Error: ${error}` });
		}
	}
	static async add(req, res) {
		try {
			let newBill = req.body;
			res.status(201).json(await bill.create(newBill));
		} catch (error) {
			console.log(`/bill add: ${error}`);
			res.status(500).send({ error: `Error: ${error}` });
		}
	}
	static async edit(req, res) {
		try {
			let editBill = req.body;
			res.status(200).json(await bill.findByIdAndUpdate(editBill.id, editBill));
		} catch (error) {
			console.log(`/bill edit: ${error}`);
			res.status(500).send({ error: `Error: ${error}` });
		}
	}
	static async delete(req, res) {
		try {
			let deleteBill = req.params;
			res.status(200).json(await bill.findByIdAndDelete(deleteBill.id));
		} catch (error) {
			console.log(`/bill delete: ${error}`);
			res.status(500).send({ error: `Error: ${error}` });
		}
	}
}

module.exports = BillController;
