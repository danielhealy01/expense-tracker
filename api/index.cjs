const mongoose = require('mongoose')
const express = require('express');
const cors = require('cors')
const transaction = require('./models/transaction.cjs')
require('dotenv').config()

const app = express();
// const mongoURL = import.meta.env.VITE_MONGO_URL;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));


app.get('/api/test', (req, res) => {
	res.json('test ok');
});

app.post('/api/transaction/', async (req, res) => {
	await mongoose.connect(process.env.VITE_MONGO_URL);
	// console.log(req.body)
	const { expense, datetime, desc } = req.body
	const transactionCreate = await transaction.create({ expense, datetime, desc })
	res.json(transactionCreate);
})


app.listen(4000);

