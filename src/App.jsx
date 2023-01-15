import './App.css';

function App() {
	return (
		<div className='App'>
			<main>
				<h1>£400</h1>
				<form>
					<input type='text' placeholder='£700 Macbook Air' />
					<input type='datetime-local' />
					<input type='text' placeholder='description' />
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
