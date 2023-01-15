const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')


const app = express();


app.use(bodyParser.json({ extended: true }));
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.get('/api/test', (req, res) => {
	res.json('test ok');
});

app.post('/api/transaction/', (req, res) => {
	// res.header('Access-Control-Allow-Origin', '*'),
	res.json(req.body)
})

app.listen(4000);

