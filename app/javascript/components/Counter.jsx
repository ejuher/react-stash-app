import React from "react";

export default ({value, setCounter}) => {
	
	function increaseCounter() {
		setCounter(value + 1)
	}

	return (
		<>
			<div>Counter Value: {value}</div>
			<button onClick={increaseCounter}>
				Increase Counter
			</button>
		</ >
	)
}