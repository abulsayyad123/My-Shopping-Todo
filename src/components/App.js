import React, { Component } from 'react';
import ToDoShoppingList from './ToDoShoppingList';
import CompletedList from './CompletedList';
import '../styles/index.css';

class App extends Component{
	render(){
		return(<div className="App">
		  <div align="center">
				<h2 className="heading"><span>o</span> My Shopping List <span>o</span></h2>
			</div>
			<div className="col-md-6">
				<ToDoShoppingList />
			</div>
			<div className="col-md-6">
				<CompletedList />
			</div>
		</div>);
	}
}

export default App;
