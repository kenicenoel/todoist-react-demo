import Todo from "./components/Todo";

function App() {
	return (
		<div>
			<h1>My Todos</h1>
			<div className='todo-list'>
				<Todo content='First' />
				<Todo content='Second' />
			</div>
		</div>
	);
}

export default App;
