import { Heading, Form, Listing } from '@/components'
import { Wrapper } from './style'
import { useState } from 'react'

function Home() {
	const [todos, setTodos] = useState([])

	const addTodo = (newTodo) => {
		setTodos([...todos, newTodo])
	}
	return (
		<Wrapper>
			<div>
				<Heading title="Todo App" />
				<Form addTodo={addTodo} />
				<Listing todos={todos} />
			</div>
		</Wrapper>
	)
}

export default Home
