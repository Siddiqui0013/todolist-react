//COUNTER EXAMPLE

import React, { useState } from "react"

export default function Demo() {
	const [Counter, setCounter] = useState(0)

	const inClick = () => {
		setCounter(Counter + 1)
	}

	const deClick = () => {
		setCounter(Counter - 1)
	}

	return (
		<>
			<div>
				<h1>{Counter}</h1>
				<button onClick={inClick}>Increment</button>
				<button onClick={deClick}>Decrement</button>
			</div>
		</>
	)
}
