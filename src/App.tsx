import React , {useState , useEffect} from 'react';
import {fetchApi} from './interface'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import { todoInterface } from './interface';
import './App.css';
import FetchApi from './FetchApi'
const App  = () => {
  const [todos ,  setTodos]  = useState<todoInterface[]>([])

  // Creating new todo...
  const handleTodoCreate = (todo : todoInterface) => {
    const newTodoState : todoInterface[] = [...todos]
    newTodoState.push(todo)
    setTodos(newTodoState)
  }

  // Updating new todo...
  const handleTodoUpdate = (e : React.ChangeEvent<HTMLInputElement> , id : string) => {
    const newTodoState : todoInterface[] = [...todos]
    newTodoState.find((todo : todoInterface) => todo.id === id)!.name = e.target.value
    setTodos(newTodoState)
  }

  // Remove todo
  const handleTodoRemove = (id : string) => {
    const newTodoState : todoInterface[] = todos.filter((todo:todoInterface) => todo.id !== id) 
    setTodos(newTodoState)
    
  }
 // checking todo is completed or not. 
   function handleTodoComplete(id: string) {
 
    const newTodoState: todoInterface[] = [...todos]
    // Find the correct todo item and update its ‘isCompleted’ key
    newTodoState.find((todo: todoInterface) => todo.id === id)!.isCompleted = !newTodoState.find((todo: todoInterface) => todo.id === id)!.isCompleted
    setTodos(newTodoState)
 }



 /// fake data api fetch ......
  const returnData = async  () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments')
    const data = await response.json()
    setFakeData(data)
  } 

	const [fakeData , setFakeData] = useState<fetchApi[]>([])
  
	useEffect(() => {
    returnData()
	},[])
  console.log(fakeData)
  return(
    <div className="App">
      <React.Fragment>
        <h2>My ToDo APP</h2>
        <TodoForm todos = {todos} handleTodoCreate = {handleTodoCreate} />
        <TodoList 
              todos = {todos}
							handleTodoComplete = {handleTodoComplete}
							handleTodoRemove = {handleTodoRemove}
							handleTodoUpdate = {handleTodoUpdate}
              />
        <FetchApi data = {fakeData} /> 
      </React.Fragment>

      
    </div>
  )
}

export default App;
