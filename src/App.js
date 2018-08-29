import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoList} from './TodoList';

class App extends React.Component {
  constructor(props) {
    super(props);    
	this.state = { items: [], text: '', priority: '', dueDate: ''};
    this.handleChange = this.handleChange.bind(this);
	this.handleChangePriority = this.handleChangePriority.bind(this);
	this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  render() {		  
		/**const todos = [{text:"Learn React", priority:5, dueDate: new Date() },
          {text:"Learn about APIs", priority:4, dueDate: new Date(2018,8,30) },
          {text:"write TODO App", priority:3, dueDate: new Date(2018,9,30) }];**/
	  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="TODO React App">TODO React App</h1>
        </header>
        <p className="App-intro">          
        </p>	  	  
		<TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label><br/><br/>
		  Text:
          <input
            id="new-todo"
			type="text"
            onChange={this.handleChange}
            value={this.state.text}
          /><br/><br/>
		  Priority:
		  <input
            id="new-todo"
			type="number"
            onChange={this.handleChangePriority}
            value={this.state.priority}
          /><br/><br/>
		  Date: 
		  <input
            id="new-todo"
			type="date"
			min="1"
			max="9999999"
            onChange={this.handleChangeDate}
            value={this.state.dueDate}
          /><br/><br/>
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>				
      </div>
    );
  }
  
   handleChange(e) {
    this.setState({ text: e.target.value});
  }
  
  handleChangePriority(e) {
    this.setState({priority: e.target.value });
  }
  
  handleChangeDate(e) {
    this.setState({dueDate: e.target.value });
  }

  handleSubmit(e) {
    
	e.preventDefault();    
	if (!this.state.text.length) {
      return;
    }
    
	const newItem = {
      text: this.state.text,
	  priority: this.state.priority,
	  dueDate: this.state.dueDate,
      id: Date.now()
    };
    
	this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: '',
	  priority: '',
	  dueDate: ''
    }));
  }
}

export default App;
