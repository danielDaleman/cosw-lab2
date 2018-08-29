import React from 'react';
import {Todo} from './Todo';

export class TodoList extends React.Component {
    
    render() {				
		const todos = this.props.items;
		const listTodo = todos.map((todo)=>			
			<li key={todo.id}>{'TEXT = ' + todo.text + ' PRIORITY= ' + todo.priority + ' DATE= ' + todo.dueDate}</li>        												
		);
        return (  
			<ul>{listTodo}</ul>		  
        );
    }

}