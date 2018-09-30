import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addTodoItemById } from '../actions';

class ToDoShoppingList extends Component{
	render(){
		return (
			<div>
				
					<ul className="list-group">
						{
							this.props.shopping_list.map(todo_data =>{
								return(
									<li key={todo_data.id} className="list-group-item">
										<div className="list-item">{todo_data.name}</div>
										<span className="list-item right-button"
											onClick={()=> this.props.addTodoItemById(todo_data.id)}
										>+</span>
									</li>
								);
							})
						}
					</ul>
			</div>
		);
	}
}

function mapStateToProps(state){
	console.log('State in mapStateToProps', state);
	return {shopping_list: state.shopping_list};
}

function mapDispactchToProps(dispatch){
	return bindActionCreators({ addTodoItemById }, dispatch);
}

export default connect(mapStateToProps, mapDispactchToProps)(ToDoShoppingList);
