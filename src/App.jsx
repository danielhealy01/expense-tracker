import './App.css';
import { useState } from 'react';

function App() {
	const [expense, setExpense] = useState('');
	const [datetime, setDatetime] = useState('');
	const [desc, setDesc] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		const url = import.meta.env.VITE_REACT_APP_API_URL + '/transaction';
		const price = expense.split(' ')[0];
		console.log(expense + '' + desc + '' + datetime);
		const data = JSON.stringify({
			expense: expense.substring(price.length + 1),
			datetime,
			desc,
			price,
		});
		console.log(data);

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
				console.log(json)
				setExpense('')
				setDatetime('')
				setDesc('')
				
			});
		});
	};

	return (
		<div className='App'>
			<main>
				<h1>£400</h1>
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
				<div className='transaction'>
					<div className='itemHeader'>
						<h2>Samsung Tv</h2>
						<h2 className='price'>+£600</h2>
					</div>
					<div className='descrAndDate'>
						<span>Description</span>
						<span>20:08 12-08-2023</span>
					</div>
					<div className='transaction'>
						<div className='itemHeader'>
							<h2>onePlus 6T</h2>
							<h2 className='priceNeg'>-£300</h2>
						</div>
						<div className='descrAndDate'>
							<span>Description</span>
							<span>22:01 12-06-2023</span>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
export default App;
