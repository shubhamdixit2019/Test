import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  homefilterSearch } from '../Actions/AddTodoAction'
import '../App.css';
import '../App'

class HomeFilterSearch extends React.Component {
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
		this.props.homefilterSearch({searchWord : searchWord});		
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
	  items: state.todo.homeitems,
	  filteredList: state.todo.homefilteredList,
	  searchWordApp : state.todo.homesearchWordApp
	};
  }
  const mapDispatchToProps = dispatch => {
	return {
	  //Index will be sent	  
	  homefilterSearch : (payload) => { dispatch(homefilterSearch(payload)) }
	};
  };
  
 export default connect(mapStateToProps, mapDispatchToProps)(HomeFilterSearch);

