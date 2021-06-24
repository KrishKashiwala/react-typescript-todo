import React from "react";
import { todoItemInterface } from "../interface";
const TodoItem  = (props : todoItemInterface) => {
return (
	<div className="todo-item" >
		<div onClick = {() => props.handleTodoComplete(props.todo.id)}>
		{props.todo.isCompleted ?( <span className="todo-item-checked"></span> ):( <span className="todo-item-unchecked"/>)}
	</div>
		
		<div className="todo-item-input-wrapper">
		<input type="text" value = {props.todo.name} onChange = {(e : React.ChangeEvent<HTMLInputElement>) => props.handleTodoUpdate(e , props.todo.id)} />
		</div>
		<div className="item-remove" onClick = {() => props.handleTodoRemove(props.todo.id)}>
			X
		</div>
</div>
)
}
export default TodoItem