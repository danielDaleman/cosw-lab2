import React, { Component } from 'react';

export class Todo extends React.Component {

    constructor(props) {
        super(props);	
	}	
	
    render() {
        return (  
          //Add your code here to represent a TODO
			<li> TEXT = this.props.text PRIORITY = this.props.priority DATE = this.props.dueData </li> 
			
        );
    }

}