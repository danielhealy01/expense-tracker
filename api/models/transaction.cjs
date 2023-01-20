const mongoose = require('mongoose')
const {Schema, model} = mongoose

const transactionSchema = new Schema({
	expense: {
		type: String,
		required: true,
	},
	datetime: {
		type: String,
		required: true,
	},
	desc: {
		type: String,
		required: true,
	},
	price: {
		type: String,
		required: true,
	}
});

const transactionModel = model('transaction', transactionSchema);

module.exports = transactionModel;
