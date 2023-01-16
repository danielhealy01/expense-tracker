const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')


const app = express();


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);
app.use(bodyParser.json({ extended: true }));

app.get('/api/test', (req, res) => {
	res.json('test ok');
});

app.post('/api/transaction/', (req, res) => {
	res.json(req.body)
	console.log(req.body)
})

app.listen(4000);

