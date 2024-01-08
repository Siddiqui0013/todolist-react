import React, { useState } from "react"

export default function Note(props) {
	const dltbtn = () => {
		props.onDlt()
	}

	return (
		<div className="todo">
			<h1>{props.title}</h1>
			<p>{props.description}</p>
			<button
				onClick={dltbtn}
				className="rmBtn"
			>
				-
			</button>
		</div>
	)
}
