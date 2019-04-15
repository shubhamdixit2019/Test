
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { homeaddTodo, homefilterSearch } from '../Actions/AddTodoAction'
import '../App.css';
import './Header'

class HomeAddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }

  onChange = (event) => {    
    this.setState({ term: event.target.value })    
  }

  onSubmit = (event) => {
    event.preventDefault();      
    this.props.homeaddTodo({ term: this.state.term });
  }

  render() {
    return (
      <div className="App">
       <form onSubmit={this.onSubmit}>
        <input value={this.state.term} onChange={this.onChange} />
        <button onClick={this.onSubmit}>
          Submit
				</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    items: state.todo.homeitems
  };
}

const mapDispatchToProps = dispatch => {
  return {
    homeaddTodo: (payload) => { dispatch(homeaddTodo(payload)) },
    homefilterSearch: (payload) => { dispatch(homefilterSearch(payload)) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeAddTodo);