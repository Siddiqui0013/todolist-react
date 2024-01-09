import "./App.css"
// import todolist from "./todolist"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Note from "./Components/Note"
import AddTodo from "./Components/AddTodo"
import { useState } from "react"
// import Demo from "./Components/Demo"
// const createtodo = (todo) => {
// 	return (
// 		<Note
// 			title={todo.title}
// 			description={todo.description}
// 		/>
// 	)
// }

function App() {
	const [todos, setTodos] = useState([])

	function addNote(note) {
		setTodos((item) => {
			return [...item, note]  
		})
		// console.log(note)
	} 

	function dltNote(id) {
		setTodos((item) => { 
		return   item.filter((item, i)=>{
				return i !== id;
			}) 
		})

		console.log(id);
	}
	return (
		<>
			<Header />
			<AddTodo onAdd={addNote} />
			{todos.map((item,i) => {
				return (
					<Note
					key ={i}
					id ={i}
						title={item.title}
						description={item.description}
						onDlt={dltNote}
					/>
				)
			})}

			{/* {todolist.map(createtodo)} */}
		</>
	)
}

export default App
