import React, { useState } from "react"

export default function AddTodo(props) {
	const [note, setnote] = useState({
		title: "",
		description: "",
	})

	function addFunc(event) {
		const { name, value } = event.target

		setnote((item) => {
			return {
				...item,
				[name]: value,
			}
		})
	}

	function submit(e) {
		props.onAdd(note)
		e.preventDefault()
	}

	return (
		<div className="addTodo">
			<form>
				<input
					name="title"
					value={note.title}
					type="text"
					onChange={addFunc}
					placeholder="Enter Title"
				></input>
				<input
					name="description"
					value={note.description}
					type="text"
					onChange={addFunc}
					placeholder="Enter Description"
				></input>
				<button
					onClick={submit}
					className="addBtn"
				>
					+
				</button>
			</form>
		</div>
	)
}
