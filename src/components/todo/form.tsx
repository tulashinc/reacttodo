import './form.css'
import { useState } from 'react'

const Form = ({ addTodo }) => {
	const [text, setText] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		addTodo(text)
		setText('')
	}

	return (
		<form className="form" onSubmit={handleSubmit}>
			<input
				type="text"
				className="textfield"
				value={text}
				placeholder="Enter a Todo"
				onChange={(e) => setText(e.target.value)}
			/>
			<input type="submit" className="submit-btn" value="Add Todo" />
		</form>
	)
}

export default Form
