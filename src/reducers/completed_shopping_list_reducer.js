import shopping_list_data from '../data/shopping_list.json';
import { ADD_TODO, REMOVE_TODO } from '../actions';

function completed_shopping_list(state=[], action){
	switch (action.type) {
		case ADD_TODO:
			let characters = [...state, createCharacter(action.id)];
			return characters;
		case REMOVE_TODO:
			let character = state.filter(item=> item.id !== action.id);
			return character;
		default:
			return state;
	}
}

function createCharacter(id){
	let character = shopping_list_data.find(c => c.id === id);
	return character;
}

export default completed_shopping_list;
