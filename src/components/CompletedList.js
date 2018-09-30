import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { removeTodoItemById } from '../actions';
class CompletedList extends Component{
	render() {
		return(
			<ul className="list-group">
					{
						this.props.completed_shopping_list.map(todo_data =>{
							return(
								<li key={todo_data.id} className="list-group-item">
									<div className="list-item">{todo_data.name}</div>
									<span className="list-item right-button"
										onClick={()=> this.props.removeTodoItemById(todo_data.id)}
									>X</span>
								</li>
							);
						})
					}
				</ul>

		);
	}
}

function mapStateToProps(state){
	return {completed_shopping_list:state.completed_shopping_list};
}

function mapDispactchToProps(dispatch){
	return bindActionCreators({ removeTodoItemById }, dispatch);
}
export default connect(mapStateToProps, mapDispactchToProps)(CompletedList);
