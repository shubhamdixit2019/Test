import React, { Component } from 'react';
import '../App.css';

class FilterSearch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		searchWord: ''
		};
	}

	onChange = (event) => {		
		this.setState({ searchWord: event.target.value });
	}

	render() {

		return (
			<div>
			<input            
            value={this.state.searchWord}
            onChange={() => this.props.handleSearch(this.state.searchWord)}
            className="search"
            type="text"
            placeholder="filter list" />
            </div>
		)
	}

}

export default FilterSearch;