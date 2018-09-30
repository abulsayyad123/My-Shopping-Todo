import shopping_list_data from '../data/shopping_list.json';
import { ADD_TODO, REMOVE_TODO } from '../actions';

function shopping_list(state= shopping_list_data, action){
	switch (action.type) {
		case ADD_TODO:
			let characters = state.filter(item=> item.id !== action.id);
			return characters;
		case REMOVE_TODO:
			characters = [...state, createCharacter(action.id)];
			return characters;

		default:
			return state;
	}
}

function createCharacter(id){
	let character = shopping_list_data.find(c => c.id === id);
	return character;
}

export default shopping_list;
