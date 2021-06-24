import React , {useState} from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import { todoInterface } from './interface';
import './App.css';

const App : React.FC = () => {
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
      </React.Fragment>
    </div>
  )
}

export default App;
