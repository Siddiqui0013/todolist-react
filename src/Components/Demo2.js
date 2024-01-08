// TIMER EXAMPLE

import React, { useState } from "react"

export default function Demo2() {
	const [time, settime] = useState(new Date().toLocaleTimeString())

	const btnfn = () => {
		settime(new Date().toLocaleTimeString())
	}

	setInterval(() => {
		settime(new Date().toLocaleTimeString())
	}, 1000)

	const [btnbg, setBtnbg] = useState("White")
	const [btnfg, setBtnfg] = useState("black")

	const over = () => {
		setBtnbg("Black")
		setBtnfg("white")
	}

	const out = () => {
		setBtnbg("white")
		setBtnfg("black")
	}

	return (
		<div>
			<h1>{time}</h1>
			<button
				style={{ backgroundColor: btnbg, color: btnfg }}
				onClick={btnfn}
				onMouseOver={over}
				onMouseOut={out}
			>
				Get Time
			</button>
		</div>
	)
}
