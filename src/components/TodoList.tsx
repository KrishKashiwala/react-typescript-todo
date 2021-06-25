import React from 'react'
import TodoItem from './TodoItem'
import { todoListInterface } from '../interface'
const TodoList = (props : todoListInterface) => {
	return(
		<div className = "todo-list">
			<ul>
				{
					props.todos.map(todo => (
						<li style = {{listStyle : "none"}} key = {todo.id}>
							<TodoItem 
							todo = {todo}
							handleTodoComplete = {props.handleTodoComplete}
							handleTodoRemove = {props.handleTodoRemove}
							handleTodoUpdate = {props.handleTodoUpdate}
							/>
						</li>
					))
				}
			</ul>
		</div>
	)
}
export default TodoList