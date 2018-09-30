import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import rootReducer from './reducers';
import { addTodoItemById } from './actions';

const store = createStore(rootReducer);
console.log('Store', store.getState());

store.subscribe(()=> console.log('Store updated', store.getState()));

store.dispatch(addTodoItemById(2));
ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>
		, document.getElementById('root')
	);
