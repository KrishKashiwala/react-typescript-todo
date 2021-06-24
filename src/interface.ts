// basic todo interface
export interface todoInterface{
	id : string,
	name : string,
	isCompleted : boolean
}
// todo form
export interface todoFormInterface {
	todos : todoInterface[],
	handleTodoCreate : (todo : todoInterface) => void
}
// todo list
export interface todoListInterface{
	handleTodoUpdate : (event : React.ChangeEvent<HTMLInputElement>  , id : string) => void,
	handleTodoRemove : (id : string) => void,
	handleTodoComplete : (id : string) => void,
	todos : todoInterface[]
}
// todo Item
export interface todoItemInterface{
	handleTodoUpdate : (event : React.ChangeEvent<HTMLInputElement>  , id : string) => void,
	handleTodoRemove : (id : string) => void | undefined,
	handleTodoComplete : (id : string) => void,
	todo : todoInterface
}