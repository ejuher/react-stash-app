// import React from "react";
import React, { useEffect, useState } from "react";
import Counter from "../components/Counter"

// export default () => <>test</ >;
export default () => {
	const [beers, setBeers] = useState([]);
	const [newBeerBrand, setNewBeerBrand] = useState("");
	const [counter, setCounter] = useState(0);

	async function loadBeers() {
		const url = "api/v1/beers/index";
		const response = await fetch(url)
		if (response.ok) {
			const data = await response.json()
			setBeers(data)
		} else {
			console.log('Network error')
		}
	};

	useEffect(() => { loadBeers() }, [])

	function totalBeers() {
		let total = 0
		beers.forEach((beer) => total += beer.quantity)
		return total
	}

	function stoutBeers() {
		let total = 0
		beers.filter((beer) => beer.style == "Stout")
		.forEach((beer) => total += beer.quantity)
		return total
	}

	function removeBeer(beerId) {
		setBeers(beers.filter((beer) => beer.id != beerId))
	}

	function changeNewBeerBrand(e) {
		setNewBeerBrand(e.target.value)
	}

	function addBeer() {
		setBeers([...beers, {id: newBeerBrand, brand: newBeerBrand}])
		setNewBeerBrand("")
	}

	return (
		<>
			<input type="text" value={newBeerBrand} onChange={changeNewBeerBrand}></input>
			<button onClick={addBeer}>Add Beer</button>
			<button onClick={loadBeers}>
				Load Beers
			</button>
			{beers.map(beer =>
				<div key={beer.id}>{beer.brand} <button onClick={() => removeBeer(beer.id)}>Remove</button></div>
			)}
			<div>total beers: {totalBeers()}</div>
			<div>stout beers: {stoutBeers()}</div>
			<Counter value={counter} setCounter={setCounter} />
		</>
	);
};
