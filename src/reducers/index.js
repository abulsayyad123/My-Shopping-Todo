import { combineReducers } from 'redux';
import shopping_list from './shopping_list_reducer';
import completed_shopping_list from './completed_shopping_list_reducer';

const rootReducers = combineReducers({
	shopping_list,
	completed_shopping_list
});

export default rootReducers;
