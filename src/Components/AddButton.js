
import React, { Component } from 'react';
import '../App.css';
import './Header'

class AddButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			term: ''
		};
	}

	onChange = (event) => {
		this.setState({ term: event.target.value });
	}

	render() {

		return (
			<div className="App">				
					
					<input value={this.state.term} onChange={this.onChange} />	
				<button  onClick = {() => this.props.onSubmit(this.state.term)}>Submit</button>
			</div>
		)
	}

}

export default AddButton;