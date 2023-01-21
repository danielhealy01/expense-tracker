import './App.css';
import { useEffect, useState } from 'react';

function App() {
	const [expense, setExpense] = useState('');
	const [datetime, setDatetime] = useState('');
	const [desc, setDesc] = useState('');
	const [transactions, setTransactions] = useState([]);

	async function getTransaction() {
		const url = import.meta.env.VITE_REACT_APP_API_URL + '/transactions';
		const res = await fetch(url);
		return await res.json();
	}

	useEffect(() => {
		getTransaction().then(setTransactions);
	}, [expense]);

	const handleSubmit = (e) => {
		e.preventDefault();
		const url = import.meta.env.VITE_REACT_APP_API_URL + '/transaction';
		const price = expense
		const newPrice = price.split(' ')[0]; 
	
		const data = JSON.stringify({
			expense: expense.substring(newPrice.length + 1),
			datetime,
			desc,
			price: newPrice.slice(1),
		});
		// console.log(data);

		// 			fetch(import.meta.env.VITE_TEST, {
		// 		method: 'GET',
		// 		headers: {
		// 			'content-type': 'application/json',
		// 		},
		// 	}).then((res) => {
		// 		const data = res.json()
		// 		console.log(data)
		// 	}
		// )};
		fetch(url, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
			},
			body: data,
		}).then((res) => {
			res.json().then((json) => {
				console.log(json);
				setExpense('');
				setDatetime('');
				setDesc('');
			});
		});
	};

	let balance = 0;
	for (const transaction of transactions) {
		// balance += Number(transaction.price)
		balance += +transaction.price;
	}

	return (
		<div className='App'>
			<main>
				{/* <h1>£400</h1> */}
				<h1>£{balance.toFixed(2)}</h1>
				<form onSubmit={handleSubmit}>
					<input
						type='text'
						placeholder='£700 Macbook Air'
						value={expense}
						onChange={(e) => setExpense(e.target.value)}
					/>
					<input
						type='datetime-local'
						value={datetime}
						onChange={(e) => setDatetime(e.target.value)}
					/>
					<input
						type='text'
						placeholder='description'
						value={desc}
						onChange={(e) => setDesc(e.target.value)}
					/>
					<div>
						<button>Submit</button>
					</div>
				</form>
				<div>
					{transactions.map((transaction) => {
						return (
							<div className='transaction' key={transaction._id}>
								<div className='itemHeader'>
									<h2>{transaction.expense}</h2>
									<h2 className='priceNeg'>{transaction.price}</h2>
								</div>
								<div className='descrAndDate'>
									<span>{transaction.desc}</span>
									<span>{transaction.datetime}</span>
								</div>
							</div>
						);
					})}
				</div>
			</main>
		</div>
	);
}
export default App;
