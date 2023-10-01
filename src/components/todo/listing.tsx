import './listing.css'

const Listing = ({ todos }) => {
	return (
		<div>
			{todos.map((td, index) => (
				<div className="todos" key={index}>
					{td}
					<button className="delete-todo" />
				</div>
			))}
		</div>
	)
}

export default Listing
