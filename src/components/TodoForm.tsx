import React , {useRef ,  useState} from 'react'
import {todoFormInterface , todoInterface} from '../interface'
import shortid from 'shortid'
const TodoForm = (props : todoFormInterface) => {
	const inputRef = useRef<HTMLInputElement>(null)
	const [values , setValues] = useState('')
	function handleInputChange(event: React.ChangeEvent<HTMLInputElement>){
		setValues(event.target.value)
	}
	function handleInputEnter(event : React.KeyboardEvent){
		if(event.key === 'Enter'){
			const newTodo:todoInterface = {
				id : shortid.generate(),
				name : values,
				isCompleted : false
			}
			props.handleTodoCreate(newTodo)
			if(inputRef && inputRef.current) inputRef.current.value = ''
		}
	}
	return(
		<div className = "todo-form">
			<input type="text"  ref = {inputRef} placeholder = "enter new todo" onChange = {(e) => handleInputChange(e)} onKeyPress= {(e) => handleInputEnter(e)}/>
		</div>
	)
}
export default TodoForm