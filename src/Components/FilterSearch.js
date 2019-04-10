import React, { Component } from 'react';
import '../App.css';
import '../App'

class FilterSearch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		searchWord: ''
		};
	}

	onChange = (event) => {		
		this.setState({ searchWord: event.target.value});
	}

	varConst ()
	{
		let searchword =this.state.searchWord;
		return searchword;
	}

	render() {

		return (
			<div className="App">
			<input            
			value={this.state.searchWord}
			onChange={this.onChange}				
            className="search"
            type="text"
            placeholder="filter list" 
			/>
			<button onClick={()=>this.props.handleSearch(this.varConst())}>Search</button>
            </div>
		)
	}

}

export default FilterSearch;