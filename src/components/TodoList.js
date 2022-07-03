import React from 'react';
import TodoItem from './TodoItem';
// import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux'
import { SelectTodos } from '../redux/selector';
// import { addTodo } from '../redux/addtodo_reducer';

const TodoList = () => {

	// const dispatch = useDispatch();

	// const  data  = useQuery('repoData', () =>
	// fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
	// .then(res => res.json())
	// .then(data => dispatch(addTodo(data))))

	const { status, error, todos } = useSelector(SelectTodos)

	return (

		<ul className='list-group'>
			{status === 'loading' && <h2>Loading...</h2>}
			{error && <h2>Something went wrong:{error}</h2>}
			{todos.map((todo) => (
				<TodoItem id={todo.id} title={todo.title} completed={todo.completed} key={todo.id} />
			))}
		</ul>
	);
};

export default TodoList;
