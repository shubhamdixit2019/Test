{/* <input
            onChange={this.handleSearch}
            value={this.state.searchWord}
            className="search"
            type="text"
            placeholder="filter list" /> */}



import React from 'react';
import '../App.css';

class AddButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			term: ''
		};
	}

	onChange = (event) => {
		console.log(event.target.value)
		this.setState({ term: event.target.value });
	}

	render() {

		return (
			<div>
				<form className="App" >
					<h1 className="HeadApp">React To-Do App</h1>
					<h2 className="HeadApp">Enhance Your Productivity</h2>
					<input value={this.state.term} onChange={this.onChange} />
					
				</form>
				<button onClick = {() => this.props.onSubmit(this.state.term)}>Submit</button>
			</div>
		)
	}

}

export default AddButton;