export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export function addTodoItemById(id){
	const action = {
		type: ADD_TODO,
		id
	}
	return action;
}

export function removeTodoItemById(id){
	const action = {
		type: REMOVE_TODO,
		id
	}
	return action;
}
