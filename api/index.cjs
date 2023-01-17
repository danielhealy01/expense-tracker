const mongoose = require('mongoose')
const express = require('express');
const cors = require('cors')
const transaction = require('./models/transaction.cjs')
require('dotenv').config()


console.log(process.env.VITE_MONGO_URL)

const app = express();
// const mongoURL = import.meta.env.VITE_MONGO_URL;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));


app.get('/api/test', (req, res) => {
	res.json('test ok');
});

app.post('/api/transaction/', (req, res) => {
	// mongoose.connect(mongoURL)
	console.log(mongoURL)
	res.json(req.body)
	console.log(req.body)
	// const {expense, datetime, desc} = res.body
})


app.listen(4000);

