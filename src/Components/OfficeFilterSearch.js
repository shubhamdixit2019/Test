import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  officefilterSearch } from '../Actions/AddTodoAction'
import '../App.css';
import '../App'

class OfficeFilterSearch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchWord: ''
		};
	}

	onChange = (event) => {
		this.setState({ searchWord: event.target.value });		
	}

	handleSearch = (searchWord) => event => {
		event.preventDefault();  
		debugger		 		
		this.props.officefilterSearch({searchWord : searchWord});		
	  }


	render() {

		return (
			
			<div className="App">	
			<form onSubmit={this.handleSearch(this.state.searchWord)}>				
				<input
					value={this.state.searchWord}
					onInput={this.onChange}
					onChange={this.handleSearch(this.state.searchWord)} 
					className="search"
					type="text"
					placeholder="filter list" />
				   <button onClick=
					{this.handleSearch(this.state.searchWord)}>
					Search
				 </button>
		     </form>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
	  items: state.todo.items,
	  filteredList: state.todo.filteredList,
	  searchWordApp : state.todo.searchWordApp
	};
  }
  const mapDispatchToProps = dispatch => {
	return {
	  //Index will be sent	  
	  officefilterSearch : (payload) => { dispatch(officefilterSearch(payload)) }
	};
  };
  
 export default connect(mapStateToProps, mapDispatchToProps)(OfficeFilterSearch);

